// Code EyesOnMe Component Here
function EyesOnMe(){
    return (
        <button onBlur={event => console.log('Hey! Eyes on me!')} onFocus={event => console.log('Good!')}>Eyes on me</button>
    )
}
export default EyesOnMe