

export default function Search(props){
    return(
        <input type="text" className='form-control my-5' value={props.search} placeholder="Search" onChange={ props.onChange} />
    )
}