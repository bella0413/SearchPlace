/*global kakao*/
import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = () => {
// const MapContainer = ({ searchPlace}) => {
    useEffect(() => {  
        // let infowindow = new kakao.maps.InfoWindow({zIndex:1}); // 마커를 클릭하면 장소명을 표출할 인포윈도우
        const container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 일반 지도와 스카이뷰 두 개의 지도 타입 컨트롤 생성 및 추가
    const mapTypeControl = new kakao.maps.MapTypeControl(); 
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤 생성 및 추가
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


    const ps = new kakao.maps.services.Places();  // 장소 검색 객체 생성
    ps.keywordSearch('구리 맛집', placesSearchCB); // 키워드로 장소 검색


    // 키워드 검색 완료 시 호출되는 콜백 함수
    function placesSearchCB (data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            let bounds = new kakao.maps.LatLngBounds();

            for (let i=0; i<data.length; i++) {
                displayMarker(data[i]);    
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }       
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정
            map.setBounds(bounds);
        } 
    }

    // 지도에 마커 표시하는 함수
    function displayMarker(place) {

        // 마커 생성하고 지도에 표시
        let marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x) 
        });
    }

    // 마커에 클릭 이벤뜨 등록
    // kakao.maps.event.addListener(marker, 'click', function() {
    //     // 마커 클릭 시 장소명이 인포윈도우에 표출
    //     infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
    //     infowindow.open(map, marker);
    // });

    // }, [searchPlace]);
    }, []);
    
    return (
        <div id='myMap' style={{
            width: '500px',
            height: '500px',
            margin: '10px auto',
        }}></div>




    );
}

export default MapContainer;