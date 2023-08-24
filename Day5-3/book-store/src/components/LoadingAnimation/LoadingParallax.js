import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import cat from '../../asset/cat.gif';

const LoadingParallax = () => {
    return (
        <>
            <Parallax pages={3}>
                <ParallaxLayer
                    offset={0}
                    speed={1}
                    factor={2}
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1532693322450-2cb5c511067d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80)",
                        backgroundSize: "cover",
                    }}
                ></ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={1}
                    factor={3}
                    style={{
                        backgroundImage:
                            "url(https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg)",
                        backgroundSize: "cover",
                    }}
                ></ParallaxLayer>


                <ParallaxLayer offset={0.2} speed={0.05} style={{
                    color: "white"
                }}>
                    <h2>Wait a moment...</h2>
                </ParallaxLayer>
                
                <ParallaxLayer
                    sticky={{ start: 0.4, end: 4.5 }}
                    style={{ textAlign: "center" }}
                >
                    <img src={cat} alt='cat'/>
                </ParallaxLayer>

                
            </Parallax>
        </>
    );
};

export default LoadingParallax;
