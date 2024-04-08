import React, { useState } from 'react';

const data = [
    { id: 1, className: "myWhiteDIV", name: "input1", value: "", defaultValue: "T" },
    { id: 2, className: "myWhiteDIV", name: "input2", value: "", defaultValue: "E" },
    { id: 3, className: "myWhiteDIV", name: "input3", value: "", defaultValue: "X" },
    { id: 4, className: "myWhiteDIV", name: "input4", value: "", defaultValue: "T" },
    { id: 5, className: "myWhiteDIV", name: "input5", value: "", defaultValue: "S" },
]

export const Layout = () => {
    const [valueSearch, setValueSearch] = useState('');
    const [dataInput, setDataInput] = useState(data)

    const handleChange = (event: any) => {
        let cloneData = JSON.parse(JSON.stringify(dataInput))
        let name = event.target.name
        cloneData.forEach((e: any) => {
            if (e?.name === name) {
                e.value = event.target.value
            }
        })

        setDataInput(cloneData)
    };

    const handleSubmit = (event: any) => {
        console.log(event.target);

        event.preventDefault();
        //xử lý giá trị sau khi form được submit
        console.log('Giá trị đã nhập:', dataInput)

        let cloneData = JSON.parse(JSON.stringify(dataInput))
        cloneData.forEach((e: any) => {
            if (e?.content?.toLowerCase() === valueSearch?.toLowerCase()) {
                e.defaultValue = true
            } else if (e?.content?.toLowerCase() !== valueSearch?.toLocaleLowerCase()) {
                // alert("You're wrong.Try again")
            }
        })
    };

    // const handleSubmitInput = (e: any) => {
    //     let cloneData = JSON.parse(JSON.stringify(dataInput))
    //     cloneData.forEach((e: any) => {
    //         e?.data?.forEach((e: any) => {
    //             if (e?.content?.toLowerCase() === valueSearch?.toLowerCase()) {
    //                 e.defaultValue = true
    //             }
    //         })
    //     })
    // }

    return (
        <div>
            <h1 className="name">Crossword Game</h1>
            <div className="grid-container">
                <div className="crossword" id="grid">
                    <form onSubmit={handleSubmit} className="square">
                        {/* Input sẽ lưu giá trị trong state và gọi hàm handleChange khi giá trị thay đổi */}
                        {dataInput.map(e => {
                            return <input name={e?.name} className={e?.className} defaultValue={e?.value} key={e.id} onChange={handleChange} />
                        })}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Layout;
