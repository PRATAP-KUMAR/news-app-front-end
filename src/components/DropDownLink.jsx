import { Link, useMatch, useResolvedPath } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const DropDownLink = (props) => {
    const obj = props;
    let { routeName, routeTo, onClick } = obj;
    const isActive = useMatch({
        path: useResolvedPath(routeTo).pathname,
        end: true,
    });

    return (
        <Link
            to={routeTo}
            className={classNames(
                isActive
                    ? "text-pad"
                    : "hover:text-white"
                ,
                "text-lite px-2 py-1 font-custom font-bold text-lg",
            )}
            onClick={onClick}
        >
            {routeName}
        </Link >
    );
};

export default DropDownLink;

