import styled from "styled-components";

interface switchProps {
    checked: boolean,
    setChecked: (value:boolean)=> void;
}

export default function Switch ({ checked, setChecked }:switchProps){
    return (
        <SwitchStyles>
            <label className="switch">
                <input 
                    type="checkbox"
                    checked={checked}
                    onChange={()=> setChecked(!checked)}
                />
                <span className="slider round"></span>
            </label>
        </SwitchStyles>
    )
}

const SwitchStyles = styled.div`
    .switch {
        position: relative;
        display: inline-block;
        width: 30px;
        height: 17px;

        input { 
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
        }
        
        .slider:before {
            position: absolute;
            content: "";
            height: 13px;
            width: 13px;
            left: 2px;
            bottom: 2px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }

        input:checked + .slider {
            background-color: #bf3a8c;
        }

        input:focus + .slider {
            box-shadow: 0 0 1px #bf3a8c;
        }

        input:checked + .slider:before {
            -webkit-transform: translateX(13px);
            -ms-transform: translateX(13px);
            transform: translateX(13px);
        }
        .slider.round {
            border-radius: 17px;
        }

        .slider.round:before {
            border-radius: 50%;
        }
    }
`