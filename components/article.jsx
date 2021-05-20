import { ItemTypes } from '../ItemTypes';
import { useDrag } from 'react-dnd';
import utilStyles from '../styles/utils.module.css'

const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    float: 'left'
};
export const Article = ({ name, imageUrl }) => {
    // const [{ opacity }, drag] = useDrag(() => ({
    //     type: ItemTypes.ARTICLE,
    //     item: { name },
    //     end(item, monitor) {
    //         const dropResult = monitor.getDropResult();
    //         if (item && dropResult) {
    //             let alertMessage = '';
    //             const isDropAllowed = dropResult.allowedDropEffect === 'any' ||
    //                 dropResult.allowedDropEffect === dropResult.dropEffect;
    //             if (isDropAllowed) {
    //                 const isCopyAction = dropResult.dropEffect === 'copy';
    //                 const actionName = isCopyAction ? 'copied' : 'moved';
    //                 alertMessage = `You ${actionName} ${item.name} into ${dropResult.name}!`;
    //             }
    //             else {
    //                 alertMessage = `You cannot ${dropResult.dropEffect} an item into the ${dropResult.name}`;
    //             }
    //             // alert(alertMessage);
    //         }
    //     },
    //     collect: (monitor) => ({
    //         opacity: monitor.isDragging() ? 0.4 : 1,
    //     }),
    // }), [name]);
  return (
    <div ref={drag} style={{ opacity }}>
        <img src={imageUrl} className={utilStyles.articleImage}/>
    </div>
  )
}