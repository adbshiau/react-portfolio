import { Grid, Icon } from 'semantic-ui-react'
import './HeroSection.css'

export default function HeroSection() {
    return (
        
        <Grid>
            <Grid.Row textAlign='center' className='hero-section'>
            <h1 id='name'>Angelica Shiau</h1>
            <h3 id='job-title'>Software Engineer</h3>
            <div className='icons'>
            <Icon name='twitter' size='big' color='grey'/>
            <Icon name='github' size='big' color='grey'/>
            <Icon name='linkedin' size='big' color='grey'/>
            </div>
            </Grid.Row>
            
        </Grid>
    )
}