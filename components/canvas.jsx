import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';
const style = {
    height: '32rem',
    width: '48rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
};

function selectBackgroundColor(isActive, canDrop) {
    if (isActive) {
        return 'darkgreen';
    }
    else if (canDrop) {
        return 'darkkhaki';
    }
    else {
        return '#222';
    }
}

// ({
//             name: `${allowedDropEffect} Canvas`,
//             allowedDropEffect,
//         })



export const Canvas = ({ allowedDropEffect, interactions }) => {
    const [{ canDrop, isOver }] = useDrop(() => ({
        accept: ItemTypes.ARTICLE,
        canDrop: () => interactions.canMoveArticle(0,0),
        drop: () => interactions.moveArticle(0,0),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }), [allowedDropEffect]);
    const isActive = canDrop && isOver;
    const backgroundColor = selectBackgroundColor(isActive, canDrop);
    // const moveBox = useCallback((id, left, top) => {
    //     setBoxes(update(boxes, {
    //         [id]: {
    //             $merge: { left, top },
    //         },
    //     }));
    // }, [boxes, setBoxes]);
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.ARTICLE,
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            // moveBox(item.id, left, top);
            return undefined;
        },
    }), [interactions]);
    return (<div ref={drop} style={{ ...style, backgroundColor }}>
			{`Works with ${allowedDropEffect} drop effect`}
			<br />
			<br />
			{isActive ? 'Release to drop' : 'Drag a box here'}
		</div>);
};
