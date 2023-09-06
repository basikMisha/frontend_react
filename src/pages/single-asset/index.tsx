import {useNavigate} from 'react-router-dom';


const SingleAssetPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1 onClick={() => navigate(-1)}>Back</h1>
        </>
    );
};

export default SingleAssetPage;