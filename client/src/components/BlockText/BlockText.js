import "./BlockText.css";

const BlockText = (props) => {

    var headerText = props.headerText;

    var textArr = props.text.split("\n");
    textArr.splice(0, 1);
    textArr.pop();
    var textHTML = [];

    for (var line of textArr) {
        textHTML.push(<p>{line}</p>);
        textHTML.push(<br />);
    }

    textHTML.pop();

    var header = "";
    if (!(headerText === "")) {
        header = <h1 className="title">{headerText}</h1>
    }

    return (
    <div className="about-us-wrapper">
        {header}
        <div className="text-wrapper">
            {textHTML}
        </div>
    </div>
    );
}

export { BlockText };