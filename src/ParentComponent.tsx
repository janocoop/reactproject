import Blogeintrag from "./blogeintag.tsx";
function Parent(){
    const component = ["Element 1", "element 2", "Element 3"];

    return (
        <div>
            {component.map((c, index) => {
                return <Blogeintrag key={index} titel={c} opt={"test"}/>
            })}
        </div>

    )
}
export default Parent















