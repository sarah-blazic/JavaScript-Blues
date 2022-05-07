import "./BlockText.css";

const BlockText = (props) => {

    var headerText = props.headerText;

    var textArr = props.text.split("\n");
    textArr.splice(0, 1);
    textArr.pop();
    var textHTML = [];

    var i = 0;
    for (var line of textArr) {
        textHTML.push(<p key={"line_text" + i}>{line}</p>);
        textHTML.push(<br key={"line_break" + i} />);
        i += 1;
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

export default BlockText;