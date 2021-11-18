import React, {FC} from 'react';
import {IRepo} from "../types/repo";

interface RepoListItemProps {
    repo:IRepo
}

const RepoListItem:FC<RepoListItemProps> = (props:RepoListItemProps) => {
    const openRepo = ():void => {
        window.open(props.repo.html_url, "_blank");
    }
    return (
        <div className='repo' onClick={openRepo}>
           <h4 className='repo__title'>{props.repo.name}</h4>
            <div className="repo__stats">
                <div className="repo__stat">{props.repo.forks_count} Forks</div>
                <div className="repo__stat">{props.repo.stargazers_count} Stars</div>
            </div>
        </div>
    );
};

export default RepoListItem;