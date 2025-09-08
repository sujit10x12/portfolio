import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export const CertificateItems = ({item}) => {
    const [toggleState, setToggleState] = useState(false)

    return (
        <>
            <div className="certification__card" key={item.id}>
                <img onClick={() => setToggleState(true)} src={item.image} alt="" className="certification__img"/>
                <div className="certification__detail">
                    <h3 className="certification__title">{item.title}</h3>
                    {/* <p onClick={() => setToggleState(true)}>Detail</p> */}
                    <a href={item.link} target="_blank" className="certification__button">
                        Verify <FaArrowRightLong className="certification__button-icon"/>
                    </a>    
                </div>
                <div className="certification__detail-tools">
                    {
                        item.tools.map((item) => (
                            <button key={item} className="certification__detail-tool-button">{item}</button>
                        ))
                    }
                </div>
        
            </div>
            <div className={toggleState ? "detail__modal detail__modal-active" : "detail__modal"}>
                <div className="detail__modal-content">
                    <span onClick={() => setToggleState(false)} className="detail__modal-close"><IoClose /></span>
                    <div className="detail__modal-description">
                        <h3 className="detail__modal-title">What I have learnt:</h3>
                        <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                            {
                                item.description.map((item, index) => 
                                    <li key={index} style={{ marginBottom: "8px" }}>{item}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}