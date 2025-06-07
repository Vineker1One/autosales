import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const SERVICE_COORDINATES = [47.237224221885505,39.74008750793388]

export default function YandexMap() {
    return (
        <YMaps>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem",
                height: "100%",
            }}>
                <Map height={"100%"} width={"100%"} defaultState={{ center: SERVICE_COORDINATES, zoom: 19 }} options={{autoFitToViewport:'always'}}>
                    <Placemark key={'placemark-main'}
                        geometry={SERVICE_COORDINATES}
                        properties={{
                            iconCaption: "Мы здесь"
                        }}
                        options={{
                            preset: 'islands#greenDotIconWithCaption',
                            iconColor: '#aeca3b',
                            controls: []
                        }}
                    />
                </Map>
            </div>
        </YMaps>
    )
}