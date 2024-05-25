import { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../stylessheets/time.css'
import useSound from 'use-sound'
import alarm from '../alarm.mp3'

function Tiempo () {

    const [time, setTime] = useState(25*60*1000)

    const [descanso, setDescanso] = useState(5*60*1000)

    const [start, setStart] = useState(false)

    const [corriendo, setCorriendo] = useState(true)

    const [playAlarm] = useSound(alarm)

    const getFromato = (miliseconds) => {

        
            let totalSeconds = parseInt(Math.floor(miliseconds / 1000))
            let totalMinutes = parseInt(Math.floor(totalSeconds / 60))

            let seconds = parseInt(totalSeconds % 60)
            let minutes = parseInt(totalMinutes % 60)  
        
            if(start === true && corriendo === true) {
                setTimeout(() => {
                    setTime(time-1000)
                    if(time <= 0){
                        setTime(0)
                        setDescanso(5*25*1000)
                        setCorriendo(false)
                        playAlarm()
                    }
                }, 1000)
            }
            if( start === true && corriendo === false ) {
                setTimeout(() => {
                    setDescanso(descanso-1000)
                    if(descanso <= 0){
                        setDescanso(0)
                        setTime(25*60*1000)
                        setCorriendo(true)
                        playAlarm()
                    }
                }, 1000)
            }

            return `${minutes} : ${seconds}`
    
    }



    const starFun = () => {
        setStart(true)
    }

    const stopFun = () => {
        setStart(false)
    }

    const add = () => {
        if(start === false ){
            setTime (time + 1*60*1000)
            console.log(time)
        }
    }

    const rest = () => {
        if(start === false && time > 1*60*1000  ){
            setTime (time - 1*60*1000)
            console.log(time)
        }
    }

    const add1 = () => {
        if(start === false ){
            setDescanso (descanso + 1*60*1000)
            console.log(descanso)
        }
    }

    const rest1 = () => {
        if(start === false && descanso > 1*60*1000  ){
            setDescanso(descanso - 1*60*1000)
            console.log(descanso)
        }
    }

    const restarFun = () => {
        if(start === false) {
            setTime(25*60*1000)
            setDescanso(5*60*1000)
            setCorriendo(true)
        }
        
    }


    return (
        <div className='tiempo container d-flex'>
            
            
            <div className='duration container d-flex'>
                <div className='session d-flex'>
                    <button className='btn btn-primary' onClick={ add }> <i className='bi bi-arrow-up'></i> </button>
                    <div className='text-c d-flex'>
                        <p className='length'>Session Length</p>
                        <p className='control-time'>{getFromato(time)}</p>
                    </div>
                    <button className='btn btn-primary' onClick={ rest }> <i className='bi bi-arrow-down'></i> </button>
                </div>

                <div className='break d-flex'>
                    <button className='btn btn-primary' onClick={ add1 }> <i className='bi bi-arrow-up'></i> </button>
                    <div className='text-c d-flex'>
                        <p className='length'>Break Length</p>
                        <p className='control-time'>{getFromato(descanso)}</p>
                    </div>
                    <button className='btn btn-primary' onClick={ rest1 }> <i className='bi bi-arrow-down'></i> </button>
                </div>
            </div>



            <p className='timeProgresion'>{getFromato( corriendo ? time : descanso )}</p>
            
            
            <div className='container d-flex controls'>
                <button className='btn btn-primary' onClick={ starFun }> <i className='bi bi-caret-right-fill'></i> </button>
                <button className='btn btn-primary' onClick={ stopFun }> <i className='bi bi-pause'></i> </button>
                <button className='btn btn-primary' onClick={ restarFun }> <i className='bi bi-arrow-clockwise'></i> </button>
            </div>
        </div>
        
    )
}

export default Tiempo