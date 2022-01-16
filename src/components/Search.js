import React, {useState} from 'react';
import './Search.css';
import { SearchOutlined, AudioFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({hideButtons = false}) {
    const [{term}, dispatch ] = useStateValue();
    
    const [input, setInput] = useState("");
    const history = useNavigate();

    const search = e => {
        e.preventDefault();
        console.log(input);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        })
        history('/search');
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchOutlined className="search__inputIcon"/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <AudioFilled />
            </div>
            {
                !hideButtons ? (
                    <div className="search__buttons">
                        <Button htmlType="submit" onClick={search} variant="outlined">Google Search</Button>
                        <Button variant="outlined">I'm feeling Lucky</Button>
                    </div>
                ):(
                    <div className="search__buttons">
                        <Button className="search__buttonsHidden" htmlType="submit" onClick={search} variant="outlined">Google Search</Button>
                        <Button className="search__buttonsHidden" variant="outlined">I'm feeling Lucky</Button>
                    </div>
                )
            }
        </form>
    )
}

export default Search
