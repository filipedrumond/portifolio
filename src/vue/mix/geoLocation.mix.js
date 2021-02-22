// global api methods
var globalGeoLocation = () => {
    return {
        methods: {
            geoLocationload: function () {
                if (!this.geoLocation.state) {
                    $('body').append($('<script type="text/javascript" src="https://polyfill.io/v3/polyfill.min.js?features=default">'));
                    $('body').append($('<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCrycw8RrFVwEucHorKbKtg8101Btx1Q2k&libraries=&v=weekly">'));
                }
                this.geoLocation.state = true;
            },
            drawMap: function (div, cords, petName) {
                let map = new window.google.maps.Map(div, {
                    center: cords,
                    zoom: 18
                });
                let marker = new window.google.maps.Marker({
                    position: cords,
                    map: map,
                    title: petName
                });
                marker.addListener('click', toggleBounce);
                function toggleBounce() {
                    if (marker.getAnimation() !== null) {
                        marker.setAnimation(null);
                    } else {
                        marker.setAnimation(window.google.maps.Animation.BOUNCE);
                    }
                }
                return {map, marker};
            }
        },
        data() {
            return {
                geoLocation: {
                    state: false
                }
            };
        },
    };
};
module.exports = globalGeoLocation();
