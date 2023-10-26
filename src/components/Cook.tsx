import { Link } from "react-router-dom";

function Cook() {
    return (
        <div>
            <div>
                Recipes
            </div>
            <Link to={`/`}>Back to World</Link>
        </div>
    )
}

export default Cook;