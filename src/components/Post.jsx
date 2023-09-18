import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';

import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Post({ author, content, publishedAt }) {

    const [comments, setComments] = useState(['Post muito bacana, hein?!']);
    const [newCommentText, setnewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", { locale: ptBR });

    const isNewCommentDisable = newCommentText.length === 0;

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText]);

        setnewCommentText('');
    };

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setnewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => comment != commentToDelete);

        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Preenche esse campo porra');
    }

    return (
        <>
            <article className={styles.article}>
                <header>
                    <div className={styles.author}>
                        <Avatar src={author.avatarUrl} />
                        <div className={styles.authorInfo}>
                            <strong> {author.name}</strong>
                            <span>{author.name}</span>
                        </div>
                    </div>

                    <time title={publishedDateFormatted}
                        dateTime={publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                    </time>


                </header>

                <div className={styles.content}>
                    {content.map(line => {
                        if (line.type === 'paragraph') {
                            return <p key={line.content} >{line.content}</p>
                        } else if (line.type === 'link') {
                            return <p key={line.content} ><a href='#'>{line.content}</a></p>
                        }
                    })}

                </div>

                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea
                        value={newCommentText}
                        name='comment'
                        placeholder='Deixe um comentário'
                        onChange={handleNewCommentChange}
                        required
                        onInvalid={handleNewCommentInvalid}
                    />

                    <footer>
                        <button type='submit' disabled={isNewCommentDisable}>Publicar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    {comments.map(comment => {
                        return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                    })}
                </div>

            </article>
        </>
    )
}