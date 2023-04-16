import { memo } from "react";

const Todos = ({todos}) => {
    console.log("deneme")

    return(
        <>
        <h2>Yapılacaklar:</h2>
        {todos.map((todo, index) => { //index array içerisindeki değerleri 0'dan başlayarak sıralar.
          return <p key={index}>{todo}</p>; //key olarak verilen değer her bir index için bu işlemi yap anlamına gelmektedir.
        })}
      </>
    )
};

export default memo(Todos); // bu şekilde bir export alırsak sadece Todos component'inin proplarında veya statelerinde bir değişiklik olduğunda re-render olur. Yani üst component olan App 
//component'i render olsa bile Todos component'inin proplarında veya statelerinde bir değişiklik olmadığı sürece Todos component'i yeniden çalışmaz.