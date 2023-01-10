import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ActionComponent({handleAmountLike,handleAmountDislike}) {


    return (
        <div className='content-actions'>
            <Stack spacing={2} direction="row">
                <Button 
                variant="outlined" 
                color='primary'
                onClick={()=>{handleAmountLike()}}
                >Me gusta</Button>

                <Button 
                variant="outlined" 
                color='primary'
                onClick={()=>{handleAmountDislike()}}
                >No me gusta</Button>
            </Stack>
        </div>
    )
}

export default ActionComponent