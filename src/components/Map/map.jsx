import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const SERVICE_COORDINATES = [52.75, 37.57]

export default function YandexMap() {
    return (
        <YMaps>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem",
                height: "calc(100% - 3rem)",
            }}>
                <span>Мы на карте</span>
                <Map height={"30rem"} width={"calc(100% - 3rem)"} defaultState={{ center: SERVICE_COORDINATES, zoom: 9 }}>
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