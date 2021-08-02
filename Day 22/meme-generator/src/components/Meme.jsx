import { useState } from "react";

const Meme = ({meme,setMeme})=>{
    const [form, setForm] = useState({
        template_id: meme.id,
        username: "",
        password:"",
        boxes:[]
    });
    const generateMeme=() =>{
        let isBlank = false;
        let url =`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        
        if(form.boxes.length == meme.box_count)
        {
        form.boxes.map((box,index) => {
            if(box.text === "")
            {
                isBlank = true;
            }
            url += (`&boxes[${index}][text]=${box.text}`);
        });
        if(!isBlank)
        {
        fetch(url).then(resp => resp.json())
        .then(data => 
                setMeme({...meme, url: data.data.url})
            );
        }
    }
    };


    return <div className="meme">
        <img src={meme.url} alt=""/>
        <div>
            {[...Array(meme.box_count)].map((_,index) => (
                <input key={index}
                    type="text" placeholder={`Meme Caption ${index +1}`}
                    onChange = {(e) =>{
                        const newBoxes =form.boxes;
                        newBoxes[index] = {text: e.target.value};
                        setForm({...form, boxes:newBoxes});
                    }}
                />
            ))}
        </div>
        <div>
            <button onClick={generateMeme} >Generate Meme</button>
            <button onClick={() =>
          {setMeme(null);}
        }>Choose Tempelate</button>
        </div>
    </div>
};

export default Meme;