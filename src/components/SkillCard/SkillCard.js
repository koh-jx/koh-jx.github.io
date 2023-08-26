import { useState } from 'react';
import './SkillCard.css';
import Popover from '@mui/material/Popover';

function SkillCard({ title="", svgSrc="" }) {
    
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <div className='aspect-square' onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} onTouchStart={handlePopoverOpen}>
                <img src={svgSrc} alt='' className='object-fit w-full h-full picture' />
            </div>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                    '& .MuiPopover-paper': {
                        padding: '0.6rem',
                        backgroundColor: "rgb(86, 108, 83)",
                        color: "white",
                    },
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
                className="font-PixelBlock text-2xl"
            >
                {title}
            </Popover>
        </div>
    );
}

export default SkillCard;