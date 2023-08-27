import {useState,useEffect} from 'react';
import './AutoTyper.css';

function AutoTyper(props) {

	// make height start at 0
	const height = props.height - 1;

	const emptyLine = " ".repeat(props.width);
	const [fullSourceLines,setFullSourceLines] = useState([]);
	const [sourceLines,setSourceLines] = useState([emptyLine]);

	const [lineCounter,setLineCounter] = useState(0);

	const [lineIndex,setLineIndex] = useState(0);

	useEffect(() => {
		fetch("http://localhost:5000/api/autocode").then(response => response.text()).then(data => {
	const lines = data.split('\n');
	setFullSourceLines(lines);
	setSourceLines(lines.slice(0,props.height));
		});
	},[props.height]);

	useEffect(() => {
	        setTimeout(() => {
		        const relativeLineCounter = lineCounter > height ? height : lineCounter;
		        const currentLineLength = sourceLines[relativeLineCounter].length;
		        // when it's time to move to the next line
		        if((lineIndex >= currentLineLength)|currentLineLength === 0) {

			        // reset line
			        setLineIndex(0);
					
			        // if we reach the bottom of the allowed area
			        if(lineCounter >= props.height-2) {
				        // move the window
				        setSourceLines(fullSourceLines.slice(lineCounter-(props.height-2),props.height + lineCounter-(props.height-2)));
			        }
			        // if there are still lines left in the source
			        if (lineCounter < fullSourceLines.length-1) {
				        setLineCounter(oldLineCounter => oldLineCounter + 1);
			        } else {
				        setLineCounter(0)
				        setSourceLines(fullSourceLines.slice(0,props.height));
			        }

		         // if it isn't time to move to the next line
		         } else if(lineIndex < currentLineLength) {
		                setLineIndex(oldLineIndex => oldLineIndex+1);
		         }
	        },props.deltaTime);
	},[fullSourceLines,lineCounter,sourceLines,lineIndex,props.deltaTime,props.height,height]);
	
	return (
		<div className='autotyper'>
		{
			sourceLines.map(
				(sourceLine,sourceLineIndex) => {
					let line = "";
					// the line that is being typed
					if(sourceLineIndex === lineCounter | (sourceLineIndex === height & lineCounter > height)) {
							line = sourceLine.slice(0,lineIndex);
					// lines before that are filled
					} else if(sourceLineIndex < lineCounter) {
							line = sourceLine;
					// lines after are blank
					} else {
							line = emptyLine;
					}
					// the space at the end prevents flickering by ensuring that empty lines still take up space
					// pre stands for "preformatted" - it's so the computer doesn't get rid of the whitespace that we want to keep
					return <pre key={sourceLineIndex}>{line+" "}</pre>
				}
		        )
		}
		</div>
	);
}

export default AutoTyper;
