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

    return (<div ref={drop} style={{ ...style, backgroundColor }}>
			{`Works with ${allowedDropEffect} drop effect`}
			<br />
			<br />
			{isActive ? 'Release to drop' : 'Drag a box here'}
		</div>);
};
