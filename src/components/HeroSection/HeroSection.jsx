import { Grid, Icon } from 'semantic-ui-react'
import './HeroSection.css'

export default function HeroSection() {
    return (
        
        <Grid>
            <Grid.Row textAlign='center' className='hero-section'>
            <h1 id='name'>Angelica Shiau</h1>
            <h3 id='job-title'>Software Engineer</h3>
            <div className='icons'>
            <a href="https://github.com/adbshiau" target="_blank"><Icon name='github' size='big' color='grey'/></a>
            <a href="https://www.linkedin.com/in/adbshiau/" target="_blank"><Icon name='linkedin' size='big' color='grey'/></a>
            <a href="mailto: angelicashiau@gmail.com" target="_blank"><Icon name='mail' size='big' color='grey'/></a>
            </div>
            </Grid.Row>
            
        </Grid>
    )
}