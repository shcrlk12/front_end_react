import {useSelector} from 'react-redux';
import BlogData from '../inc/blogData';

export default function BlogData_Container(){
    const state = useSelector((state)=>state);

    const blogData = state.map((state, index)=>
    {
        console.log('state');
        console.log(state.like);
        return (
            <div key ={index}>
                <BlogData
                id = {state.id}
                title = {state.title}
                data = {state.data}
                like = {state.like}
                modify_date = {state.modify_date}
                />
            </div>
        );
    });


    return (
        <>
            {blogData}
        </>
    );

}
