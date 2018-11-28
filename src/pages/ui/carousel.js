import React from 'react'
import { Card, Carousel } from 'antd'
import './ui.css'
export default class Carousels extends React.Component {
    render() {
        return (
            <div>
                <Card title="文字背景轮播图" className="card-wrap">
                    {/* autoplay是否自动切换 */}
                    {/* effect="fade"淡入淡出 */}
                    <Carousel autoplay effect="fade">
                        <div><h3>Ant Motion Banner - React</h3></div>
                        <div><h3>Ant Motion Banner - Vue</h3></div>
                        <div><h3>Ant Motion Banner - Angular</h3></div>
                    </Carousel>
                </Card>
                <Card title="图片背景轮播图" className=" slider-wrap">
                    {/* autoplay是否自动切换 */}
                    {/* effect="fade"淡入淡出 */}
                    <Carousel autoplay effect="fade" >
                        <div>
                            <img src="/carousel-img/carousel-1.jpg" />
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-2.jpg" />
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-3.jpg" />
                        </div>
                    </Carousel>
                </Card>
            </div >
        )
    }
}
