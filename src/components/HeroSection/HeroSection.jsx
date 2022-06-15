import { Grid } from 'semantic-ui-react'
import './HeroSection.css'

export default function HeroSection() {
    return (
        
        <Grid className='hero-section'>
            <Grid.Row textAlign='center'>
            <h1 id='name'>Angelica Shiau</h1>
            <h3 id='job-title'>SOFTWARE ENGINEER</h3>
            </Grid.Row>
            
        </Grid>
    )
}