import { faOtter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const MeditativeButton = ({addABreak}) => {

    const navigate = useNavigate()

    const doMedatitiveMomentClick = (evt) => {
        evt.preventDefault()
        const radioButtons = document.querySelectorAll('[name="meditative-length"]'); 
        const time = getValue(radioButtons)
        navigate("/breathe")
        startTimer(time)
        addABreak(evt)
    }

    const startTimer = (time) => {
        setTimeout(() => {
            navigate('/')
          }, time * 60000)
    }

    const getValue = (buttons) => {
        let selectedSize = ''
    
        for (const button of buttons) {
        if (button.checked) {
            selectedSize = button.value;
            button.checked = false
            break;
            }
        }
        return selectedSize  
    }

    return (
        <>
            <legend>Meditate:</legend>
                <br/>
                    <label>1 minute</label>
                        <input
                            type="radio"
                            id="1"
                            name="meditative-length"
                            value="1"
                            />
                <br />

                    <label>2 minutes</label>
                        <input
                            type="radio"
                            id="2"
                            name="meditative-length"
                            value="2"
                            />
                <br/> <br/>

                <button onClick={doMedatitiveMomentClick}>
                    <FontAwesomeIcon icon={faOtter} id="meditative-button" style={{width: '30px', height: '30px', margin: '-8px'}}/>
                </button>

        </>
    )

}

export default MeditativeButton