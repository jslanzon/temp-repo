import './styles.css';

export const PostCard = (props) => {
    const post = props.post;

    return (
        <div className="post">
            <img src={post.cover} alt={post.title} />
            <div className="post-card">
                <h2 >{ post.id } - {post.title}</h2>
                <p> {post.body}</p>
            </div>
        </div>
    );
}


