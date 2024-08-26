import './loader.css'

export default function Loader() {
    return(
        <>

        <div className="snake_loader">
            <div className="snake_in_loader">
                 <div id="target_in_loader"></div>
                <div className="segment_in_loader"></div> 
                <div className="segment_in_loader"></div>
                <div className="segment_in_loader"></div> 
                <div className="segment_in_loader"></div>
                <div className="segment_in_loader"></div>
            </div>
        </div>

        </>
    );
}