import React, {FC} from 'react';
import {IRepo} from "../types/repo";
import RepoListItem from "./RepoListItem";

interface RepoListProps {
    data: IRepo[]
}
const RepoList:FC<RepoListProps> = (props:RepoListProps) => {
    if(!props.data.length) {
        return <h1 className='main-title'> No Repos with such name</h1>
    }
    return (
        <>
            {props.data.map(repo => <RepoListItem key={repo.id} repo={repo}/>)}
        </>
    );
};

export default RepoList;