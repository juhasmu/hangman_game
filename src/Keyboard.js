import Button from "./Button";

const Keyboard = ({guessedChars,setGuessedChars,setCount,count,toGuessC}) => {
    function checkGuess(toGuessC,guessedChars){
        for(let char of toGuessC){
            if (char === guessedChars[guessedChars.length-1])return true;
        }
        return false;
    }
    function buttonPressed(id){
        let char = id.target.innerHTML;
        guessedChars = [...guessedChars,char];
        setGuessedChars(guessedChars);
        let flag = true;
        if (guessedChars.length>0)flag = checkGuess(toGuessC,guessedChars);
        if(!flag){
            let temp = count+1;
            setCount(temp);
        }


    }
    return (
        <>
            <Button name = "a" className = "keyboard" id='key_a' onClick = {(e) => buttonPressed(e)} />
            <Button name = "b" className = "keyboard" id='key_b' onClick = {(e) => buttonPressed(e)} />
            <Button name = "c" className = "keyboard" id='key_c' onClick = {(e) => buttonPressed(e)} />
            <Button name = "d" className = "keyboard" id='key_d' onClick = {(e) => buttonPressed(e)} />
            <Button name = "e" className = "keyboard" id='key_e' onClick = {(e) => buttonPressed(e)} />
            <Button name = "f" className = "keyboard" id='key_f' onClick = {(e) => buttonPressed(e)} />
            <Button name = "g" className = "keyboard" id='key_g' onClick = {(e) => buttonPressed(e)} />
            <Button name = "h" className = "keyboard" id='key_h' onClick = {(e) => buttonPressed(e)} />
            <Button name = "i" className = "keyboard" id='key_i' onClick = {(e) => buttonPressed(e)} />
            <Button name = "j" className = "keyboard" id='key_j' onClick = {(e) => buttonPressed(e)} />
            <br/>
            <Button name = "k" className = "keyboard" id='key_k' onClick = {(e) => buttonPressed(e)} />
            <Button name = "l" className = "keyboard" id='key_l' onClick = {(e) => buttonPressed(e)} />
            <Button name = "m" className = "keyboard" id='key_m' onClick = {(e) => buttonPressed(e)} />
            <Button name = "n" className = "keyboard" id='key_n' onClick = {(e) => buttonPressed(e)} />
            <Button name = "o" className = "keyboard" id='key_o' onClick = {(e) => buttonPressed(e)} />
            <Button name = "p" className = "keyboard" id='key_p' onClick = {(e) => buttonPressed(e)} />
            <Button name = "q" className = "keyboard" id='key_q' onClick = {(e) => buttonPressed(e)} />
            <Button name = "r" className = "keyboard" id='key_r' onClick = {(e) => buttonPressed(e)} />
            <Button name = "s" className = "keyboard" id='key_s' onClick = {(e) => buttonPressed(e)} />
            <Button name = "t" className = "keyboard" id='key_t' onClick = {(e) => buttonPressed(e)} />
            <br/>
            <Button name = "u" className = "keyboard" id='key_u' onClick = {(e) => buttonPressed(e)} />
            <Button name = "v" className = "keyboard" id='key_v' onClick = {(e) => buttonPressed(e)} />
            <Button name = "w" className = "keyboard" id='key_w' onClick = {(e) => buttonPressed(e)} />
            <Button name = "x" className = "keyboard" id='key_x' onClick = {(e) => buttonPressed(e)} />
            <Button name = "y" className = "keyboard" id='key_y' onClick = {(e) => buttonPressed(e)} />
            <Button name = "z" className = "keyboard" id='key_z' onClick = {(e) => buttonPressed(e)} />
            <Button name = "å" className = "keyboard" id='key_å' onClick = {(e) => buttonPressed(e)} />
            <Button name = "ä" className = "keyboard" id='key_ä' onClick = {(e) => buttonPressed(e)} />
            <Button name = "ö" className = "keyboard" id='key_ö' onClick = {(e) => buttonPressed(e)} />
            <br/>
        </>
    )
}

export default Keyboard
