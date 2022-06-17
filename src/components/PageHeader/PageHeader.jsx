import { Menu } from 'semantic-ui-react'
import './PageHeader.css';

export default function PageHeader() {

    return (
        <Menu 
        fixed='top'
        size='large'
        className='header'
        >
            <Menu.Item as='a' active>Home</Menu.Item>
            <Menu.Item as='a'>About</Menu.Item>
            <Menu.Item as='a'>Portfolio</Menu.Item>
            <Menu.Item as='a'>Contact</Menu.Item>
            <Menu.Item as='a' href='./Shiau Resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</Menu.Item>
        </Menu>
        
    )
}

