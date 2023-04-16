import useFetch from "./hooks/useFetch";

function IsBilgi({isNo}){
    const [data] = useFetch(`https://jsonplaceholder.typicode.com/todos/${isNo}`)

    return(
        <>
            {data && <p>iş No: {data.id}, İş Adı: {data.title}, <input type="checkbox" readOnly checked={data.completed}/></p>}
        </>
    );
};

export default IsBilgi;


