import "./certification.css"
import { Data } from "./CertificateData"
import { CertificateItems } from "./CertificateItems"
import { useEffect, useState } from "react"

export const Certificates = () => {

    const [data, setData] = useState([])
    
    useEffect(() => {
        setData(Data)
    }, [data])

    return (
        <div>
            <div className="certification__container container grid">
                {   data &&
                    data.map((item) => (
                        <CertificateItems item={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
    )
}