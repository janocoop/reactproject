type Props = {
    titel: string;
    opt?: string;
}
function Blogeintag (props: Props) {
    return  <div>
        {props.titel}

    </div>

}

export default Blogeintag;