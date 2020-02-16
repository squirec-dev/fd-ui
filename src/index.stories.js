import React from 'react';
import {
    storiesOf,
} from '@storybook/react';
// Objects
import Bullet from './objects/bullet';
import Button from './objects/button';
import Card from './objects/card';
// Components
import Tooltip from './components/tooltip';

storiesOf('Bullet', module)
    .add('Single line', () => {
        return (<Bullet>Single line</Bullet>);
    })
    .add('Multi line', () => {
        return (
            <Bullet>
                <p>Multi</p>
                <p>lines</p>
            </Bullet>
        );
    })
    .add('Options', () => {
        return (
            <Bullet>
                TODO: icon, colored icon, scaled icon, reversed, text alignment
            </Bullet>
        );
    });
storiesOf('Button', module)
    .add('Semantic button', () => {
        return (
            <Button onClick={() => alert("Clicked!")}>Click Me!</Button>
        );
    })
    .add('Link with button aesthetic', () => {
        return (
            <Button
                as="a"
                href="https://www.google.co.uk/search?q=cat+memes&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjA6qLx1NbnAhUlpnEKHVaKD8IQ_AUoAXoECA4QAw&biw=1320&bih=689&dpr=2"
                target="_blank"
                rel="nofollow noopener noreferrer"
            >
                Click Me!
            </Button>
        );
    })
    .add('With icon', () => {
        return (
            <Button>
                TODO
            </Button>
        );
    });
storiesOf('Card', module)
    .add('Default', () => {
        return (
            <Card>Hello World</Card>
        );
    })
    .add('Split content', () => {
        return (
            <Card>
                <div>Hello World</div>
                <div>Hello World</div>
            </Card>
        );
    });

storiesOf('Tooltip', module)
    .add('Default', () => {
        return (
            <Tooltip
                id="fd-c-tooltip-story"
            >
                <p>Hello World</p>
                <p>Hello World</p>
            </Tooltip>
        );
    })
    .add('Options', () => {
        return (
            <Tooltip
                id="fd-c-tooltip-story"
            >
                TODO: pointer positions top, right, bottom, left
            </Tooltip>
        );
    });
