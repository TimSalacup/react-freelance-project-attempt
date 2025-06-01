import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = () => {
    return (
        <>
            <div className="service">
            <FontAwesomeIcon icon={faNotesMedical} className="service__logo"/>
                <span className="service__title">
                    LOREM, IPSUM.
                </span>
                <span className="service__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestias commodi consectetur ab, cum recusandae.
                </span>
            </div>
        </>
    )
}

export default Service;