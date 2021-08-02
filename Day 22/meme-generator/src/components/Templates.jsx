const Templates = ({templates,setMeme}) => {
    return <div className="templates">{templates.map(item=> (
        <div key={item.id} className="template" 
        onClick={() =>
          {setMeme(item);}
        }>
          <div style={{backgroundImage: `url(${item.url})`}} className="image" ></div>
        </div>
    ))}</div>;
}

export default Templates;