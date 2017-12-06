import * as types from '../../constants/actionTypes'

export function getData() {
    return {
        type: types.GET_DATA,
        data: [

            {
                "url": "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=334&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            {
                "url": "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            {
                "url": "https://images.unsplash.com/photo-1501159873713-dc65286617cc?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            {
                "url": "https://images.unsplash.com/photo-1485436442739-c12c6e3673af?auto=format&fit=crop&w=553&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            {
                "url": "https://images.unsplash.com/photo-1485893226355-9a1c32a0c81e?auto=format&fit=crop&w=500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            {
                "url": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
        ]
    }
}

export function getDataPeople() {
    return {
        type: types.GET_DATA_PEOPLE,
        staff: [
            {
                id: 26,
                name: "Yến Nhi",
                email: "nhi.tty146@gmail.com",
                created_at: "2016-02-10 17:47:17",
                updated_at: "2017-11-27 14:40:16",
                role: 2,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1474537430dcZ400aXFMpPuC0.jpg",
                cover_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1474537492Ia3yzwhkvNhQWz1.jpg",
                description: "Sale & Marketing Manager at colorME",
                university: "ĐH Kinh Tế Quốc Dân",
                work: "colorME",
                address: "Hà Nội",
                username: "nhi.tty146",
                phone: "01689678262",
                how_know: "",
                facebook: "",
                dob: "1995-06-14",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/1474537430dcZ400aXFMpPuC0.jpg",
                cover_name: "/images/1474537492Ia3yzwhkvNhQWz1.jpg",
                order: 0,
                role_id: 9,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "e91e63",
                base_id: 3,
                marital: 1,
                homeland: "",
                literacy: 0,
                start_company: "2015-11-01 00:00:00",
                age: 23,
                deleted_at: null,
                type: null
            },
            {
                id: 38,
                name: "Trịnh Thanh Hà",
                email: "trinhthanhha1105@gmail.com",
                created_at: "2016-02-11 03:25:45",
                updated_at: "2017-09-09 17:01:58",
                role: 1,
                code: "",
                avatar_url: "http://s3-ap-southeast-1.amazonaws.com/cmstorage/images/146229259379k739AO8l3Ssyt.jpg",
                cover_url: "",
                description: "chậm lại thôi :v",
                university: "ĐH KTQD",
                work: "",
                address: "Cầu Giấy, Hà Nội",
                username: "trinhthanhha1105",
                phone: "01666575729",
                how_know: "Lý do khác",
                facebook: "",
                dob: "1996-05-11",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/146229259379k739AO8l3Ssyt.jpg",
                cover_name: null,
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "f44336",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 39,
                name: "Hứa Hiền Linh",
                email: "linhhh.bav@gmail.com",
                created_at: "2016-02-11 03:25:46",
                updated_at: "2017-09-28 15:50:40",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1506588638DBPnLTYPoXBHe69.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1460023498BFYRvN18G7rNqhn.jpg",
                description: "",
                university: "Arena Multimedia",
                work: "colorME",
                address: "",
                username: "linhhh.bav",
                phone: "",
                how_know: "",
                facebook: "",
                dob: "2016-08-18",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/1506588638DBPnLTYPoXBHe69.jpg",
                cover_name: "/images/1460023498BFYRvN18G7rNqhn.jpg",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "e91e63",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 40,
                name: " Đức Hoàng",
                email: "duchoangnguyen240597@gmail.com",
                created_at: "2016-02-11 03:25:48",
                updated_at: "2017-09-09 17:02:10",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475488476QVYGrKR1hmf3WRu.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466594740VZrMeFaY923KwkK.jpg",
                description: "",
                university: "",
                work: "",
                address: "",
                username: "duchoangg",
                phone: "",
                how_know: "",
                facebook: "",
                dob: "1997-05-24",
                gender: "1",
                money: 0,
                status: 0,
                avatar_name: "/images/1475488476QVYGrKR1hmf3WRu.jpg",
                cover_name: "/images/1466594740VZrMeFaY923KwkK.jpg",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "9c27b0",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 41,
                name: "Con Cá",
                email: "haveyoueverbeenlove@gmail.com",
                created_at: "2016-02-11 03:25:49",
                updated_at: "2017-09-28 01:09:26",
                role: 1,
                code: "",
                avatar_url: "http://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1457529913ZeLnSBzbRoLrCdf.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1462719494tP3UBcZ3obELMH5.jpg",
                description: "",
                university: "",
                work: "",
                address: "",
                username: "concaaa",
                phone: "",
                how_know: "",
                facebook: "",
                dob: "1995-05-13",
                gender: "1",
                money: 814011,
                status: 0,
                avatar_name: "/images/1457529913ZeLnSBzbRoLrCdf.jpg",
                cover_name: "/images/1462719494tP3UBcZ3obELMH5.jpg",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "673ab7",
                base_id: 4,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 45,
                name: "Nguyen Mine Linh",
                email: "mailinhnguyen.15@gmail.com",
                created_at: "2016-02-11 03:26:00",
                updated_at: "2017-09-20 15:01:17",
                role: 1,
                code: "",
                avatar_url: "http://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1457424670qC09gEUVo3hAYyb.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468571054lTj1LM8g1knnWlm.jpg",
                description: "",
                university: "Học viện Công nghệ Bưu chính Viễn thông",
                work: "colorME",
                address: "Tây Hồ Hà Nội",
                username: "mailinhnguyen.15",
                phone: "01654085862",
                how_know: "Lý do khác",
                facebook: "",
                dob: "1996-05-01",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/1457424670qC09gEUVo3hAYyb.jpg",
                cover_name: "/images/1468571054lTj1LM8g1knnWlm.jpg",
                order: 0,
                role_id: 20,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "cddc39",
                base_id: 3,
                marital: 1,
                homeland: "Hà Nội",
                literacy: 1,
                start_company: "2016-02-02 00:00:00",
                age: 21,
                deleted_at: null,
                type: null
            },
            {
                id: 46,
                name: "Thu Trang",
                email: "vuthutrang.hmu@gmail.com",
                created_at: "2016-02-11 03:26:03",
                updated_at: "2017-09-09 17:02:27",
                role: 1,
                code: "",
                avatar_url: "http://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1462903003SFggmwF4imwMqTw.jpeg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1470645730OSg0Ela6P3PXYpA.JPG",
                description: "",
                university: "",
                work: "",
                address: "",
                username: "vuthutrang.hmu",
                phone: "",
                how_know: "",
                facebook: "",
                dob: "1997-10-29",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/1462903003SFggmwF4imwMqTw.jpeg",
                cover_name: "/images/1470645730OSg0Ela6P3PXYpA.JPG",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "2196f3",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 2,
                name: "Nguyễn Việt Hùng",
                email: "thanghungkhi@gmail.com",
                created_at: "2016-02-11 04:03:36",
                updated_at: "2017-12-02 20:53:43",
                role: 2,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1503369355g3nTaVigDKKyjUQ.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466096090IsWXNOeHvMIhpMT.jpg",
                description: "",
                university: "FPT University",
                work: "1684026343",
                address: "Dong Da",
                username: "thanghungkhi",
                phone: "01684026343",
                how_know: "",
                facebook: ".",
                dob: "2017-09-14",
                gender: "1",
                money: 1685711000,
                status: 0,
                avatar_name: "/images/1503369355g3nTaVigDKKyjUQ.jpg",
                cover_name: "/images/1466096090IsWXNOeHvMIhpMT.jpg",
                order: 2,
                role_id: 9,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 103,
                color: "009688",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 1,
                name: "Cao Anh Quan",
                email: "aquancva@gmail.com",
                created_at: "2016-02-13 10:35:54",
                updated_at: "2017-11-13 15:42:07",
                role: 2,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1503131612qkfg0K1kNOoQ5IJ.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage",
                description: "",
                university: "Quan Cao Anh",
                work: "0969785925",
                address: "22 Trần Quốc Toản",
                username: "caoquan",
                phone: "0978086530",
                how_know: "",
                facebook: "",
                dob: "2016-12-13",
                gender: "1",
                money: 13,
                status: 0,
                avatar_name: "/images/1503131612qkfg0K1kNOoQ5IJ.jpg",
                cover_name: null,
                order: 0,
                role_id: 9,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 130,
                color: "f44336",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 6730,
                name: "Quan High",
                email: "quan@colorme.vn",
                created_at: "2016-02-13 10:35:54",
                updated_at: "2017-11-13 15:42:07",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1503131612qkfg0K1kNOoQ5IJ.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage",
                description: "",
                university: "Quan Cao Anh",
                work: "0969785925",
                address: "22 Trần Quốc Toản",
                username: "quanca",
                phone: "0978086530",
                how_know: "",
                facebook: "",
                dob: "2016-12-13",
                gender: "1",
                money: 0,
                status: 0,
                avatar_name: "/images/1503131612qkfg0K1kNOoQ5IJ.jpg",
                cover_name: null,
                order: 0,
                role_id: 9,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 130,
                color: "",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 74,
                name: "Phạm Khánh Huyền",
                email: "phamkhanhhuyen.0412@gmail.com",
                created_at: "2016-02-16 16:02:04",
                updated_at: "2017-11-04 21:16:50",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1507718500CG6HuKFWDRE9bEO.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1463560111XoORy9jcgIMytvy.jpg",
                description: "Lêu lêu :) ",
                university: "Đại học Ngoại Thương",
                work: "Công nhân tại ColorME",
                address: "Ba Đình, Hà Nội",
                username: "khanhuyn0412",
                phone: "01699184360",
                how_know: "",
                facebook: "",
                dob: "1996-12-04",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/1507718500CG6HuKFWDRE9bEO.jpg",
                cover_name: "/images/1463560111XoORy9jcgIMytvy.jpg",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "00bcd4",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 124,
                name: "Nguyễn Anh Đức",
                email: "ducna.mgc@gmail.com",
                created_at: "2016-02-17 20:29:09",
                updated_at: "2017-09-07 10:02:40",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1504753360CgEln48Iw5etz0u.jpg",
                cover_url: "",
                description: "",
                university: "Đại Học Kinh Tế Quốc Dân",
                work: "Đại Học Kinh Tế Quốc Dân",
                address: "Tô Hiệu Cầu Giấy Hà Nội",
                username: "ducna.mgc",
                phone: "0165476269",
                how_know: "Người quen",
                facebook: "https://www.facebook.com/nguyenanh.duc.58",
                dob: "0000-00-00",
                gender: "1",
                money: 0,
                status: 0,
                avatar_name: null,
                cover_name: null,
                order: 0,
                role_id: 8,
                is_request_cv: 0,
                cv_url: "",
                cv_id: 0,
                color: "",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 221,
                name: "Lê Trâm Anh",
                email: "tramanhle9797@gmail.com",
                created_at: "2016-02-22 10:24:03",
                updated_at: "2017-10-10 10:23:22",
                role: 1,
                code: "",
                avatar_url: "http://s3-ap-southeast-1.amazonaws.com/cmstorage/images/146098241539FobW9ObGkNTSp.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1459746168Byul83svmmAwK9A.jpg",
                description: "",
                university: "FTU",
                work: "",
                address: "Hà Đông",
                username: "tramanhle9797",
                phone: "01634361163",
                how_know: "Facebook",
                facebook: "facebook.com/lee.3i",
                dob: "1997-09-07",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/146098241539FobW9ObGkNTSp.jpg",
                cover_name: "/images/1459746168Byul83svmmAwK9A.jpg",
                order: 0,
                role_id: 15,
                is_request_cv: 0,
                cv_url: "",
                cv_id: 0,
                color: "",
                base_id: 0,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 228,
                name: "Dương Nhật Anh",
                email: "anhdnse04260@fpt.edu.vn",
                created_at: "2016-02-22 20:46:43",
                updated_at: "2017-11-30 16:46:28",
                role: 2,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1504404886wdXEVCPFipzhPqJ.jpg",
                cover_url: "",
                description: "",
                university: "FPT University",
                work: "ColorME",
                address: "",
                username: "anhdn_",
                phone: "0934559919",
                how_know: "",
                facebook: "",
                dob: "1995-11-03",
                gender: "1",
                money: 89595000,
                status: 0,
                avatar_name: "/images/1504404886wdXEVCPFipzhPqJ.jpg",
                cover_name: null,
                order: 1,
                role_id: 9,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "",
                base_id: 3,
                marital: 1,
                homeland: "Quảng Trị",
                literacy: 0,
                start_company: "2015-07-07 00:00:00",
                age: 22,
                deleted_at: null,
                type: null
            },
            {
                id: 313,
                name: "Hồ Huyền Trang",
                email: "huyentrang@colorme.vn",
                created_at: "2016-02-28 22:56:05",
                updated_at: "2017-11-05 18:15:20",
                role: 2,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/15045995749eyjJ6XH9OHC43F.jpg",
                cover_url: "",
                description: "",
                university: "Đại học Ngoại Thương",
                work: "",
                address: "185 Chùa Láng Đống Đa, Hà Nội",
                username: "hohuyentrang258",
                phone: "0949587867",
                how_know: "Người quen",
                facebook: "Facebook.com/Sunnyni.7",
                dob: "1997-08-25",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: null,
                cover_name: null,
                order: 0,
                role_id: 18,
                is_request_cv: 0,
                cv_url: "",
                cv_id: 0,
                color: "4caf50",
                base_id: 3,
                marital: 1,
                homeland: "",
                literacy: 1,
                start_company: "2017-02-13 00:00:00",
                age: 20,
                deleted_at: null,
                type: null
            },
            {
                id: 336,
                name: "Nguyễn Kiều Trang",
                email: "kieutrangnt53.fbaelite@gmail.com",
                created_at: "2016-03-02 23:05:46",
                updated_at: "2017-09-09 17:02:52",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1479719670PveTZYk9d4gj7vG.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1465070257fn0YjG9F8kTyRGa.jpg",
                description: "",
                university: "Đại học Ngoại Thương ",
                work: "colorME",
                address: "Chùa Láng ",
                username: "kieutrangnt53.fbaelite",
                phone: "01664202629",
                how_know: "Lý do khác",
                facebook: "https://www.facebook.com/rosalinalaciel",
                dob: "2016-07-06",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/1479719670PveTZYk9d4gj7vG.jpg",
                cover_name: "/images/1465070257fn0YjG9F8kTyRGa.jpg",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "009688",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 507,
                name: "Le Tuan Dat",
                email: "datlt.bav@gmail.com",
                created_at: "2016-03-21 20:06:27",
                updated_at: "2017-09-09 17:02:57",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1482480963wiOGb5SjVsRb7pT.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1462115910lCup9M2NgCnoOJL.jpg",
                description: "Giảng viên After Effect và Photography tại colorME",
                university: "Học Viện Ngân Hàng",
                work: "ColorME",
                address: "",
                username: "datlt.bav",
                phone: "0975714696",
                how_know: "Lý do khác",
                facebook: "",
                dob: "1996-02-15",
                gender: "1",
                money: 0,
                status: 0,
                avatar_name: "/images/1482480963wiOGb5SjVsRb7pT.jpg",
                cover_name: "/images/1462115910lCup9M2NgCnoOJL.jpg",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "4caf50",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 587,
                name: "Nguyễn Ngọc Xuyến",
                email: "thaonguyencass25897@gmail.com",
                created_at: "2016-03-31 17:34:46",
                updated_at: "2017-09-09 17:03:08",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1483364168VmBoUA5pF3RzuWb.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/146565518735Lehcv9q18urPq.jpeg",
                description: "",
                university: "viện đại học mở hà nội",
                work: "",
                address: "tam trinh , hà nội",
                username: "thaonguyencass25897",
                phone: "01662164306",
                how_know: "",
                facebook: "",
                dob: "1996-11-30",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/1483364168VmBoUA5pF3RzuWb.jpg",
                cover_name: "/images/146565518735Lehcv9q18urPq.jpeg",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "cddc39",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 650,
                name: "Nguyễn Việt Anh",
                email: "nguyenvietanh.020395@gmail.com",
                created_at: "2016-04-08 23:16:51",
                updated_at: "2017-09-09 17:03:13",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1486463354BFNafPVd92tGgaR.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466257702CTOXStufY0XoGy1.png",
                description: "Intelligent but lazy",
                university: "Học viện công nghệ Bưu chính viễn thông",
                work: "colorMe",
                address: "102/75 Giải Phóng",
                username: "nguyenvietanh.020395",
                phone: "0902202395",
                how_know: "",
                facebook: "",
                dob: "1995-03-02",
                gender: "1",
                money: 0,
                status: 0,
                avatar_name: "/images/1486463354BFNafPVd92tGgaR.jpg",
                cover_name: "/images/1466257702CTOXStufY0XoGy1.png",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "ffeb3b",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 708,
                name: "Hoàng Minh Tùng ",
                email: "blueberryandmatcha@gmail.com",
                created_at: "2016-04-12 23:05:06",
                updated_at: "2017-10-31 11:31:11",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505995284sSCsAFCwB0lAf38.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/146228402001XRjfPETtMCGMj.jpg",
                description: "",
                university: "FPT polytechnic",
                work: "",
                address: "Cầu Diễn, Hà Nội.",
                username: "blueberryandmatcha",
                phone: "0962910248",
                how_know: "Người quen",
                facebook: "https://www.facebook.com/tung.minh.96",
                dob: "0000-00-00",
                gender: "1",
                money: 0,
                status: 2,
                avatar_name: "/images/146228393206v9eV7G9bUb95B.jpg",
                cover_name: "/images/146228402001XRjfPETtMCGMj.jpg",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "ffc107",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            }
        ],
    }
}


export function getDataSchedules() {
    return {
        type: types.GET_DATA_SCHEDULES,
        schedules: [
            {
                id: 24,
                name: "Tối Thứ 2 - Thứ 4 - Thứ 6 (19h00-21h00)",
                description: "",
                sessions_str: "Thứ hai: 19:00-21:00<br/>Thứ tư: 19:00-21:00<br/>Thứ sáu: 19:00-21:00<br/>",
                study_session_ids: [
                    4,
                    9,
                    15
                ]
            },
            {
                id: 22,
                name: "Tối Thứ 3 - Thứ 5 - Thứ 7 (19h00-21h00)",
                description: "",
                sessions_str: "Thứ ba: 19:00-21:00<br/>Thứ năm: 19:00-21:00<br/>Thứ bảy: 19:00-21:00<br/>",
                study_session_ids: [
                    6,
                    12,
                    18
                ]
            },
            {
                id: 21,
                name: "Lịch khoá chuyên sâu 4-6-CN (19h00-21h00)",
                description: "",
                sessions_str: "Thứ tư: 19:00-21:00<br/>Thứ sáu: 19:00-21:00<br/>Chủ nhật: 19:00-21:00<br/>",
                study_session_ids: [
                    9,
                    15,
                    21
                ]
            },
            {
                id: 19,
                name: "Tối Thứ 7 - Chủ Nhật (19h00-21h00)",
                description: "",
                sessions_str: "Thứ bảy: 19:00-21:00<br/>Chủ nhật: 19:00-21:00<br/>",
                study_session_ids: [
                    18,
                    21
                ]
            },
            {
                id: 18,
                name: "Chiều Thứ 7 - Chủ Nhật (15h00-17h00)",
                description: "",
                sessions_str: "Thứ bảy: 15:00-17:00<br/>Chủ nhật: 15:00-17:00<br/>",
                study_session_ids: [
                    17,
                    20
                ]
            },
            {
                id: 17,
                name: "Sáng Thứ 7 - Chủ Nhật (9h00-11h00)",
                description: "",
                sessions_str: "Thứ bảy: 9:00-11:00<br/>Chủ nhật: 9:00-11:00<br/>",
                study_session_ids: [
                    16,
                    19
                ]
            },
            {
                id: 16,
                name: "Tối Thứ 4 - Thứ 6 (19h00-21h00)	",
                description: "",
                sessions_str: "Thứ tư: 19:00-21:00<br/>Thứ sáu: 19:00-21:00<br/>",
                study_session_ids: [
                    9,
                    15
                ]
            },
            {
                id: 15,
                name: "Chiều Thứ 4 - Thứ 6 (15h00-17h00)",
                description: "",
                sessions_str: "Thứ tư: 15:00-17:00<br/>Thứ sáu: 15:00-17:00<br/>",
                study_session_ids: [
                    8,
                    14
                ]
            },
            {
                id: 14,
                name: "Sáng Thứ 4 - Thứ 6 (9h00-11h00)",
                description: "",
                sessions_str: "Thứ tư: 9:00-11:00<br/>Thứ sáu: 9:00-11:00<br/>",
                study_session_ids: [
                    7,
                    13
                ]
            },
            {
                id: 13,
                name: "Tối Thứ 3 - Thứ 5 (19h00-21h00)",
                description: "",
                sessions_str: "Thứ ba: 19:00-21:00<br/>Thứ năm: 19:00-21:00<br/>",
                study_session_ids: [
                    6,
                    12
                ]
            },
            {
                id: 12,
                name: "Chiều Thứ 3 - Thứ 5 (15h00-17h00)",
                description: "",
                sessions_str: "Thứ ba: 15:00-17:00<br/>Thứ năm: 15:00-17:00<br/>",
                study_session_ids: [
                    1,
                    11
                ]
            },
            {
                id: 3,
                name: "Sáng Thứ 3 - Thứ 5 (9h00-11h00)",
                description: "",
                sessions_str: "Thứ ba: 9:00-11:00<br/>Thứ năm: 9:00-11:00<br/>",
                study_session_ids: [
                    5,
                    10
                ]
            }
        ]
    }
}


export function getDataRole() {
    return {
        type: types.GET_DATA_ROLE,
        roles: [
            {
                id: 22,
                role_title: "Designer SM",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 12,
                created_at: "2017-10-22 15:53:12",
                updated_at: "2017-10-22 15:53:12",
                deleted_at: null
            },
            {
                id: 21,
                role_title: "backend",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 9,
                created_at: "2017-10-08 10:35:05",
                updated_at: "2017-11-01 23:33:41",
                deleted_at: null
            },
            {
                id: 20,
                role_title: "Giám đốc đào tạo",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 22,
                created_at: "2017-09-20 15:01:06",
                updated_at: "2017-11-16 00:03:06",
                deleted_at: null
            },
            {
                id: 19,
                role_title: "Sales Manager",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 27,
                created_at: "2017-09-07 14:59:12",
                updated_at: "2017-10-12 13:07:37",
                deleted_at: null
            },
            {
                id: 18,
                role_title: "Trợ lý Giám đốc Sales&Marketing",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 34,
                created_at: "2017-08-08 11:22:05",
                updated_at: "2017-10-12 13:08:19",
                deleted_at: null
            },
            {
                id: 17,
                role_title: "Quản lý sách",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 7,
                created_at: "2016-10-16 10:38:59",
                updated_at: "2016-11-27 00:11:26",
                deleted_at: null
            },
            {
                id: 16,
                role_title: "test chuyen tien",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 1,
                created_at: "2016-08-28 22:09:43",
                updated_at: "2016-08-28 22:09:43",
                deleted_at: null
            },
            {
                id: 15,
                role_title: "Trainee",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 4,
                created_at: "2016-07-11 20:41:32",
                updated_at: "2017-09-05 13:01:59",
                deleted_at: null
            },
            {
                id: 13,
                role_title: "Email Marketing",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 26,
                created_at: "2016-07-08 14:31:05",
                updated_at: "2017-09-05 13:03:42",
                deleted_at: null
            },
            {
                id: 11,
                role_title: "IT",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 48,
                created_at: "2016-07-05 16:36:35",
                updated_at: "2017-10-12 13:10:48",
                deleted_at: null
            },
            {
                id: 10,
                role_title: "Giảng viên",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 12,
                created_at: "2016-07-05 16:35:28",
                updated_at: "2017-09-05 13:01:20",
                deleted_at: null
            },
            {
                id: 9,
                role_title: "CEO",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 61,
                created_at: "2016-07-05 16:34:41",
                updated_at: "2017-10-12 13:09:48",
                deleted_at: null
            },
            {
                id: 8,
                role_title: "Marketing&Sales",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 33,
                created_at: "2016-07-05 16:33:00",
                updated_at: "2017-10-12 13:09:05",
                deleted_at: null
            },
            {
                id: 7,
                role_title: "Telesale",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 21,
                created_at: "2016-07-05 09:40:29",
                updated_at: "2017-04-15 21:50:21",
                deleted_at: null
            }
        ]
    }
}

export function getDataStudySession() {
    return {
        type: types.GET_DATA_STUDY_SESSION,
        study_sessions: [
            {
                id: 21,
                start_time: "19:00",
                end_time: "21:00",
                weekday: "Chủ nhật",
                selected: false
            },
            {
                id: 20,
                start_time: "15:00",
                end_time: "17:00",
                weekday: "Chủ nhật",
                selected: false
            },
            {
                id: 19,
                start_time: "9:00",
                end_time: "11:00",
                weekday: "Chủ nhật",
                selected: false
            },
            {
                id: 18,
                start_time: "19:00",
                end_time: "21:00",
                weekday: "Thứ bảy",
                selected: false
            },
            {
                id: 17,
                start_time: "15:00",
                end_time: "17:00",
                weekday: "Thứ bảy",
                selected: false
            },
            {
                id: 16,
                start_time: "9:00",
                end_time: "11:00",
                weekday: "Thứ bảy",
                selected: false
            },
            {
                id: 15,
                start_time: "19:00",
                end_time: "21:00",
                weekday: "Thứ sáu",
                selected: false
            },
            {
                id: 14,
                start_time: "15:00",
                end_time: "17:00",
                weekday: "Thứ sáu",
                selected: false
            },
            {
                id: 13,
                start_time: "9:00",
                end_time: "11:00",
                weekday: "Thứ sáu",
                selected: false
            },
            {
                id: 12,
                start_time: "19:00",
                end_time: "21:00",
                weekday: "Thứ năm",
                selected: false
            },
            {
                id: 11,
                start_time: "15:00",
                end_time: "17:00",
                weekday: "Thứ năm",
                selected: false
            },
            {
                id: 10,
                start_time: "9:00",
                end_time: "11:00",
                weekday: "Thứ năm",
                selected: false
            },
            {
                id: 9,
                start_time: "19:00",
                end_time: "21:00",
                weekday: "Thứ tư",
                selected: false
            },
            {
                id: 8,
                start_time: "15:00",
                end_time: "17:00",
                weekday: "Thứ tư",
                selected: false
            },
            {
                id: 7,
                start_time: "9:00",
                end_time: "11:00",
                weekday: "Thứ tư",
                selected: false
            },
            {
                id: 6,
                start_time: "19:00",
                end_time: "21:00",
                weekday: "Thứ ba",
                selected: false
            },
            {
                id: 5,
                start_time: "9:00",
                end_time: "11:00",
                weekday: "Thứ ba",
                selected: false
            },
            {
                id: 4,
                start_time: "19:00",
                end_time: "21:00",
                weekday: "Thứ hai",
                selected: false
            },
            {
                id: 3,
                start_time: "15:00",
                end_time: "17:00",
                weekday: "Thứ hai",
                selected: false
            },
            {
                id: 2,
                start_time: "9:00",
                end_time: "11:00",
                weekday: "Thứ hai",
                selected: false
            },
            {
                id: 1,
                start_time: "15:00",
                end_time: "17:00",
                weekday: "Thứ ba",
                selected: false
            }
        ]
    }
}

export function getDataRegisterStudent() {
    return {
        type: types.GET_DATA_REGISTER_STUDENT,
        registers: [
            {
                id: 18594,
                gen_id: 25,
                code: "CM31545",
                name: "Nguyễn Việt Nga",
                student_id: 7359,
                email: "vietnga.skt@gmail.com",
                university: ".",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "0979682929",
                paid_status: true,
                time_to_reach: 24,
                course_avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481009736PWVqDXlU8KoFwwJ.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 3,
                note: "CM30072 học lại để nắm vững kiến thức ",
                class: {
                    name: "PR 31.1",
                    id: 1042,
                    study_time: "(19h-21h) Thứ 7 - Chủ Nhật",
                    description: "Khai giảng ngày 16 tháng 12 năm 2017",
                    room: "Tầng 4",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2017-12-04 10:32:30",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 3331,
                    name: "Lý Nguyệt Thu",
                    color: "F62359"
                },
                campaign: {
                    id: 18,
                    name: "DS Chờ",
                    color: "43a047"
                }
            },
            {
                id: 18593,
                gen_id: 25,
                code: "",
                name: "Tăng Mỹ Kỳ",
                student_id: 8396,
                email: "myky.tang@gmail.com",
                university: ".",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "0933901144",
                paid_status: false,
                time_to_reach: 1,
                course_avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072336A5Ks9NSnqnHsXOn.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "AI - Danh Sách Chờ (Cơ sở 3)",
                    id: 1010,
                    study_time: "colorME sẽ gọi cho bạn mỗi khi có khoá mới.",
                    description: "Nhận ưu đãi tốt nhất từ colorME",
                    room: "Tầng 4",
                    base: "Số 835/14 Trần Hưng Đạo, Phường 1, Quận 5, TP HCM"
                },
                created_at: "2017-12-04 10:16:05",
                is_delete: true,
                call_status: "success",
                saler: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                }
            },
            {
                id: 18592,
                gen_id: 25,
                code: "",
                name: "Tăng Mỹ Kỳ",
                student_id: 8396,
                email: "myky.tang@gmail.com",
                university: ".",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "0933901144",
                paid_status: false,
                time_to_reach: 1,
                course_avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072407tOyRFhAeFPjsbfu.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "PS 31.17 (Sài Gòn)",
                    id: 1059,
                    study_time: "(19h-21h) Thứ 4 - Thứ 6",
                    description: "Khai giảng ngày 13 tháng 12 năm 2017",
                    room: "Tầng 5",
                    base: "Số 835/14 Trần Hưng Đạo, Phường 1, Quận 5, TP HCM"
                },
                created_at: "2017-12-04 10:15:17",
                is_delete: true,
                call_status: "success",
                saler: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                }
            },
            {
                id: 18591,
                gen_id: 25,
                code: "",
                name: "Nguyễn Thị Hồng Hà",
                student_id: 5972,
                email: "1234glx@gmail.com",
                university: "Học viện Ngoại giao",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1502413914zm9KIcYAuInDNM2.jpg",
                phone: "0868959480",
                paid_status: false,
                time_to_reach: 23,
                course_avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072336A5Ks9NSnqnHsXOn.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 3,
                note: "",
                class: {
                    name: "AI 31.4",
                    id: 1023,
                    study_time: "(19h-21h) Thứ 4 - Thứ 6",
                    description: "Khai giảng ngày 13 tháng 12 năm 2017",
                    room: "Tầng 2",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2017-12-04 09:29:58",
                is_delete: true,
                call_status: "uncall"
            },
            {
                id: 18590,
                gen_id: 25,
                code: "",
                name: "Lê Đặng Hoàng Tùng",
                student_id: 8394,
                email: "ledanghoangtung@gmail.com",
                university: "RMIT",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "01638595779",
                paid_status: false,
                time_to_reach: 22,
                course_avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072407tOyRFhAeFPjsbfu.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "PS 31.6",
                    id: 1009,
                    study_time: "(19h-21h) Thứ 7 - Chủ Nhật",
                    description: "Khai giảng ngày 16 tháng 12 năm 2017",
                    room: "Tầng 5",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2017-12-04 08:47:27",
                is_delete: true,
                call_status: "uncall"
            },
            {
                id: 18589,
                gen_id: 25,
                code: "",
                name: "Ngô Minh",
                student_id: 2802,
                email: "minh.greencity@gmail.com",
                university: "Đi làm",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1478516137yVOHRaaLI8mHFNy.jpg",
                phone: "0962183335",
                paid_status: false,
                time_to_reach: 17,
                course_avatar_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg",
                course_money: 1200000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "PT 31.2",
                    id: 1049,
                    study_time: "(19h-21h) Thứ 3 - Thứ 5",
                    description: "Khai giảng ngày 12 tháng 12 năm 2017",
                    room: "Studio Tầng 5",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2017-12-04 03:02:54",
                is_delete: true,
                call_status: "uncall"
            },
            {
                id: 18588,
                gen_id: 25,
                code: "",
                name: "Ngô Minh",
                student_id: 2802,
                email: "minh.greencity@gmail.com",
                university: "Đi làm",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1478516137yVOHRaaLI8mHFNy.jpg",
                phone: "0962183335",
                paid_status: false,
                time_to_reach: 17,
                course_avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481009736PWVqDXlU8KoFwwJ.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "PR 31.2",
                    id: 1045,
                    study_time: "(19h-21h) Thứ 4 - Thứ 6",
                    description: "Khai giảng ngày 13 tháng 12 năm 2017",
                    room: "Tầng 3",
                    base: "Số 15 ngõ 2 Thọ Tháp (Trần Thái Tông rẽ vào) - Cầu Giấy - Hà Nội"
                },
                created_at: "2017-12-04 02:57:55",
                is_delete: true,
                call_status: "uncall"
            },
            {
                id: 18587,
                gen_id: 25,
                code: "",
                name: "Nguyễn Ngọc Diệp Yến",
                student_id: 8393,
                email: "diepyenng@gmail.com",
                university: "Viện ĐH Mở Hà Nội",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "0989363951",
                paid_status: false,
                time_to_reach: 14,
                course_avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072407tOyRFhAeFPjsbfu.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "PS - Danh Sách Chờ (Cơ sở 1)",
                    id: 994,
                    study_time: "ColorME sẽ gọi cho bạn ngay khi có khoá mới.",
                    description: "ColorME sẽ gọi cho bạn ngay khi có khoá mới.",
                    room: "Tầng 5",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2017-12-04 00:52:03",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 5064,
                    name: "Nguyễn Thanh Thi",
                    color: ""
                },
                campaign: {
                    id: 8,
                    name: "Fanpage",
                    color: "7cb342"
                }
            },
            {
                id: 18586,
                gen_id: 25,
                code: "",
                name: "Nguyễn Ngọc Diệp Yến",
                student_id: 8393,
                email: "diepyenng@gmail.com",
                university: "Viện ĐH Mở Hà Nội",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "0989363951",
                paid_status: false,
                time_to_reach: 14,
                course_avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072336A5Ks9NSnqnHsXOn.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "AI 31.1",
                    id: 1026,
                    study_time: "(9h-11h) Thứ 3 - Thứ 5",
                    description: "Khai giảng ngày 12 tháng 12 năm 2017",
                    room: "Tầng 2",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2017-12-04 00:46:59",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 5064,
                    name: "Nguyễn Thanh Thi",
                    color: ""
                },
                campaign: {
                    id: 8,
                    name: "Fanpage",
                    color: "7cb342"
                }
            },
            {
                id: 18585,
                gen_id: 25,
                code: "",
                name: "Phạm Lê Ngọc Linh",
                student_id: 7557,
                email: "ngoclinhrobust26@gmail.com",
                university: "Đại học Hà Nội",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "01632361999",
                paid_status: false,
                time_to_reach: 14,
                course_avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072407tOyRFhAeFPjsbfu.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 2,
                note: "",
                class: {
                    name: "PS - Danh Sách Chờ (Cơ sở 2)",
                    id: 993,
                    study_time: "ColorME sẽ gọi cho bạn ngay khi có khoá mới. ",
                    description: "ColorME sẽ gọi cho bạn ngay khi có khoá mới.",
                    room: "Tầng 5",
                    base: "Số 162 phố Phương Liệt ( số 83 Trường Chinh rẽ vào) - Thanh Xuân - Hà Nội"
                },
                created_at: "2017-12-04 00:08:21",
                is_delete: true,
                call_status: "uncall"
            },
            {
                id: 18584,
                gen_id: 25,
                code: "",
                name: "Bùi Trung Kiên",
                student_id: 3939,
                email: "trungkienbui1998@gmail.com",
                university: "z",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1508239347d2EHR8PrSvM0PLz.jpg",
                phone: "0168.770.7575",
                paid_status: false,
                time_to_reach: 13,
                course_avatar_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                course_money: 1200000,
                money: 0,
                study_time: 2,
                note: "",
                class: {
                    name: "AE 31.1",
                    id: 1036,
                    study_time: "(19h-21h) Thứ 3 - Thứ 5",
                    description: "Khai giảng ngày 12 tháng 12 năm 2017",
                    room: "Tầng 4",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2017-12-03 23:42:21",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 3290,
                    name: "Nguyễn Mỹ Linh",
                    color: "c0ca33"
                },
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                }
            },
            {
                id: 18583,
                gen_id: 25,
                code: "",
                name: "Đinh Phương Linh",
                student_id: 8392,
                email: "linhdinh812@gmail.com",
                university: "z",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "0983633970",
                paid_status: false,
                time_to_reach: 13,
                course_avatar_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                course_money: 1200000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "AE 31.1",
                    id: 1036,
                    study_time: "(19h-21h) Thứ 3 - Thứ 5",
                    description: "Khai giảng ngày 12 tháng 12 năm 2017",
                    room: "Tầng 4",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2017-12-03 23:41:06",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 3290,
                    name: "Nguyễn Mỹ Linh",
                    color: "c0ca33"
                },
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                }
            },
            {
                id: 18582,
                gen_id: 25,
                code: "",
                name: "Vũ Thị Thảo Nguyên",
                student_id: 8391,
                email: "vttnnguyen295@gmail.com",
                university: ".",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "01697670653",
                paid_status: false,
                time_to_reach: 12,
                course_avatar_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg",
                course_money: 1200000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "PT - Khoá Sau (Danh Sách Chờ)",
                    id: 1044,
                    study_time: "colorME sẽ gọi cho bạn mỗi khi có khoá mới.",
                    description: "Nhận ưu đãi tốt nhất từ colorME",
                    room: "Studio Tầng 5",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2017-12-03 22:32:28",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 3331,
                    name: "Lý Nguyệt Thu",
                    color: "F62359"
                },
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                }
            },
            {
                id: 18581,
                gen_id: 25,
                code: "",
                name: "Vũ Thị Thảo Nguyên",
                student_id: 8391,
                email: "vttnnguyen295@gmail.com",
                university: ".",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "01697670653",
                paid_status: false,
                time_to_reach: 12,
                course_avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481009736PWVqDXlU8KoFwwJ.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "PR - Danh Sách Chờ (Cơ sở 1)",
                    id: 1041,
                    study_time: "colorME sẽ gọi cho bạn mỗi khi có khoá mới.",
                    description: "Nhận ưu đãi tốt nhất từ colorME",
                    room: "Tầng 2",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2017-12-03 22:32:17",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 3331,
                    name: "Lý Nguyệt Thu",
                    color: "F62359"
                },
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                }
            },
            {
                id: 18580,
                gen_id: 25,
                code: "",
                name: "Vũ Thị Thảo Nguyên",
                student_id: 8391,
                email: "vttnnguyen295@gmail.com",
                university: ".",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "01697670653",
                paid_status: false,
                time_to_reach: 12,
                course_avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072336A5Ks9NSnqnHsXOn.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "AI - Danh Sách Chờ (Cơ sở 1)",
                    id: 1019,
                    study_time: "colorME sẽ gọi cho bạn mỗi khi có khoá mới.",
                    description: "colorME sẽ gọi cho bạn mỗi khi có khoá mới.",
                    room: "Tầng 2",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2017-12-03 22:32:06",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 3331,
                    name: "Lý Nguyệt Thu",
                    color: "F62359"
                },
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                }
            },
            {
                id: 18579,
                gen_id: 25,
                code: "",
                name: "Vũ Thị Thảo Nguyên",
                student_id: 8391,
                email: "vttnnguyen295@gmail.com",
                university: ".",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "01697670653",
                paid_status: false,
                time_to_reach: 12,
                course_avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072407tOyRFhAeFPjsbfu.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "PS - Danh Sách Chờ (Cơ sở 1)",
                    id: 994,
                    study_time: "ColorME sẽ gọi cho bạn ngay khi có khoá mới.",
                    description: "ColorME sẽ gọi cho bạn ngay khi có khoá mới.",
                    room: "Tầng 5",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2017-12-03 22:31:52",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 3331,
                    name: "Lý Nguyệt Thu",
                    color: "F62359"
                },
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                }
            },
            {
                id: 18578,
                gen_id: 25,
                code: "",
                name: "Hoàng Mai Linh",
                student_id: 8390,
                email: "linhbin18799@gmail.com",
                university: ".",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "0964980070",
                paid_status: false,
                time_to_reach: 12,
                course_avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072407tOyRFhAeFPjsbfu.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "PS - Danh Sách Chờ (Cơ sở 1)",
                    id: 994,
                    study_time: "ColorME sẽ gọi cho bạn ngay khi có khoá mới.",
                    description: "ColorME sẽ gọi cho bạn ngay khi có khoá mới.",
                    room: "Tầng 5",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2017-12-03 22:11:18",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 3331,
                    name: "Lý Nguyệt Thu",
                    color: "F62359"
                },
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                }
            },
            {
                id: 18577,
                gen_id: 25,
                code: "",
                name: "Hoàng Mai Linh",
                student_id: 8390,
                email: "linhbin18799@gmail.com",
                university: ".",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "0964980070",
                paid_status: false,
                time_to_reach: 12,
                course_avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072336A5Ks9NSnqnHsXOn.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "AI - Danh Sách Chờ (Cơ sở 1)",
                    id: 1019,
                    study_time: "colorME sẽ gọi cho bạn mỗi khi có khoá mới.",
                    description: "colorME sẽ gọi cho bạn mỗi khi có khoá mới.",
                    room: "Tầng 2",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2017-12-03 22:11:03",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 3331,
                    name: "Lý Nguyệt Thu",
                    color: "F62359"
                },
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                }
            },
            {
                id: 18576,
                gen_id: 25,
                code: "",
                name: "Hoàng Mai Linh",
                student_id: 8390,
                email: "linhbin18799@gmail.com",
                university: ".",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "0964980070",
                paid_status: false,
                time_to_reach: 12,
                course_avatar_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg",
                course_money: 1200000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "PT - Khoá Sau (Danh Sách Chờ)",
                    id: 1044,
                    study_time: "colorME sẽ gọi cho bạn mỗi khi có khoá mới.",
                    description: "Nhận ưu đãi tốt nhất từ colorME",
                    room: "Studio Tầng 5",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2017-12-03 22:10:48",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 3331,
                    name: "Lý Nguyệt Thu",
                    color: "F62359"
                },
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                }
            },
            {
                id: 18575,
                gen_id: 25,
                code: "",
                name: "Hoàng Mai Linh",
                student_id: 8390,
                email: "linhbin18799@gmail.com",
                university: ".",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "0964980070",
                paid_status: false,
                time_to_reach: 12,
                course_avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481009736PWVqDXlU8KoFwwJ.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "PR - Danh Sách Chờ (Cơ sở 1)",
                    id: 1041,
                    study_time: "colorME sẽ gọi cho bạn mỗi khi có khoá mới.",
                    description: "Nhận ưu đãi tốt nhất từ colorME",
                    room: "Tầng 2",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2017-12-03 22:10:24",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 3331,
                    name: "Lý Nguyệt Thu",
                    color: "F62359"
                },
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                }
            }
        ],
    }
}

export function getDataGens() {
    return {
        type: types.GET_DATA_GENS,
        gens: [
            {
                id: 26,
                name: "32",
                description: "Khai giảng ngày 16 tháng 1 năm 2018",
                start_time: "2017-12-01",
                end_time: "2018-02-18",
                status: 0,
                teach_status: 0
            },
            {
                id: 25,
                name: "31",
                description: "Khai giảng ngày 12 tháng 12 năm 2017",
                start_time: "2017-11-09",
                end_time: "2017-12-12",
                status: 1,
                teach_status: 0
            },
            {
                id: 23,
                name: "30",
                description: "Khóa 30",
                start_time: "2017-10-11",
                end_time: "2017-11-08",
                status: 0,
                teach_status: 1
            },
            {
                id: 22,
                name: "29",
                description: "",
                start_time: "2017-09-07",
                end_time: "2017-10-11",
                status: 0,
                teach_status: 0
            },
            {
                id: 21,
                name: "28",
                description: "",
                start_time: "2017-08-09",
                end_time: "2017-09-06",
                status: 0,
                teach_status: 0
            },
            {
                id: 20,
                name: "27",
                description: "",
                start_time: "2017-07-07",
                end_time: "2017-08-08",
                status: 0,
                teach_status: 0
            },
            {
                id: 19,
                name: "26",
                description: "",
                start_time: "2017-06-09",
                end_time: "2017-07-06",
                status: 0,
                teach_status: 0
            },

            {
                id: 18,
                name: "25",
                description: "",
                start_time: "2017-05-13",
                end_time: "2017-06-10",
                status: 0,
                teach_status: 0
            },
            {
                id: 17,
                name: "24",
                description: "",
                start_time: "2017-04-13",
                end_time: "2017-05-13",
                status: 0,
                teach_status: 0
            },
            {
                id: 16,
                name: "23",
                description: "",
                start_time: "2017-03-14",
                end_time: "2017-04-12",
                status: 0,
                teach_status: 0
            },
            {
                id: 15,
                name: "21",
                description: "",
                start_time: "2017-02-13",
                end_time: "2017-03-14",
                status: 0,
                teach_status: 0
            },
            {
                id: 14,
                name: "20",
                description: "",
                start_time: "2017-01-04",
                end_time: "2017-02-17",
                status: 0,
                teach_status: 0
            },
            {
                id: 13,
                name: "19",
                description: "",
                start_time: "2016-12-03",
                end_time: "2017-01-03",
                status: 0,
                teach_status: 0
            },
            {
                id: 12,
                name: "18",
                description: "",
                start_time: "2016-11-06",
                end_time: "2016-12-03",
                status: 0,
                teach_status: 0
            },

            {
                id: 10,
                name: "17",
                description: "ƯU ĐÃI NỔI BẬT: ĐĂNG KÝ & ĐÓNG HỌC PHÍ TRƯỚC NGÀY 17/10 GIẢM NGAY 150K HỌC PHÍ MÔN THIẾT KẾ BẤT KỲ ⚠️ ƯU ĐÃI LỚN NHẤT: GIẢM ĐẾN 200K HỌC PHÍ CHO KHÓA NHIẾP ẢNH: HỌC NHIẾP ẢNH SẴN MÁY ẢNH CHỈ VỚI GIÁ 1.000.000Đ ⚠️ ƯU ĐÃI NGAY 800.000Đ KHI ĐĂNG KÝ COMBO 4",
                start_time: "2016-10-09",
                end_time: "2016-11-07",
                status: 0,
                teach_status: 0
            },
            {
                id: 9,
                name: "16",
                description: "",
                start_time: "2016-09-06",
                end_time: "2016-10-09",
                status: 0,
                teach_status: 0
            },
            {
                id: 8,
                name: "15",
                description: "",
                start_time: "2016-08-04",
                end_time: "2016-09-06",
                status: 0,
                teach_status: 0
            },
            {
                id: 6,
                name: "14",
                description: "",
                start_time: "2016-07-05",
                end_time: "2016-08-03",
                status: 0,
                teach_status: 0
            },
            {
                id: 5,
                name: "13",
                description: "",
                start_time: "2016-06-06",
                end_time: "2016-07-04",
                status: 0,
                teach_status: 0
            },
            {
                id: 4,
                name: "12",
                description: "",
                start_time: "2016-05-09",
                end_time: "2016-06-05",
                status: 0,
                teach_status: 0
            },
            {
                id: 3,
                name: "11",
                description: "",
                start_time: "2016-04-03",
                end_time: "2016-05-08",
                status: 0,
                teach_status: 0
            },
            {
                id: 2,
                name: "10",
                description: "",
                start_time: "2016-03-01",
                end_time: "2016-04-02",
                status: 0,
                teach_status: 0
            },
            {
                id: 1,
                name: "9",
                description: "Khóa 9 - Bắt đầu tuyển sinh từ cuối tháng 2, chính thức học vào đầu tháng 3",
                start_time: "2016-02-14",
                end_time: "2016-03-05",
                status: 0,
                teach_status: 0
            }

        ],
    }
}

export function getDataCourse() {
    return {
        type: types.GET_DATA_COURSE,
        courses: [
            {
                id: 1,
                name: "Photoshop",
                icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072407tOyRFhAeFPjsbfu.jpg",
                num_classes: 218,
                duration: 8,
                price: 1000000
            },
            {
                id: 2,
                name: "Illustrator",
                icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072336A5Ks9NSnqnHsXOn.jpg",
                num_classes: 175,
                duration: 8,
                price: 1000000
            },
            {
                id: 3,
                name: "After Effects",
                icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                num_classes: 78,
                duration: 8,
                price: 1200000
            },
            {
                id: 4,
                name: "Photography",
                icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg",
                num_classes: 67,
                duration: 8,
                price: 1200000
            },
            {
                id: 5,
                name: "Premiere",
                icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481009736PWVqDXlU8KoFwwJ.jpg",
                num_classes: 25,
                duration: 8,
                price: 1000000
            },
            {
                id: 6,
                name: "InDesign",
                icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481440169SyPRLsY5aXZOL6d.jpg",
                num_classes: 14,
                duration: 8,
                price: 1000000
            },
            {
                id: 7,
                name: "Thiết Kế Chuyên Sâu",
                icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1494575688odFkdXzweOeXMpO.jpg",
                num_classes: 3,
                duration: 75,
                price: 12000000
            },
            {
                id: 8,
                name: "UI UX",
                icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/150643679690MuQbClSmXQ7ug.jpg",
                num_classes: 2,
                duration: 16,
                price: 2000000
            }
        ],
    }
}

export function getDataClasses() {
    return {
        type: types.GET_DATA_CLASSES,
        classes: [
            {
                id: 1051,
                name: "AI nhóm (SG)",
                datestart: "24 Tháng M. hai, 2017",
                datestart_en: "2017-12-24",
                study_time: "(8h30-11h30 & 13h30-16h30) Chủ nhật",
                description: "Đăng kí lớp cho nhóm của bạn",
                status: 0,
                activated: 0,
                schedule_id: 17,
                total_paid: 6,
                target: 6,
                total_register: 6,
                regis_target: 6,
                created_at: "08:41, 8 Tháng M. một, 2017",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 2,
                    name: "Illustrator",
                    icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072336A5Ks9NSnqnHsXOn.jpg"
                },
                room: {
                    id: 20,
                    name: "Tầng 5",
                    base: "Cơ sở 3",
                    address: "Số 835/14 Trần Hưng Đạo, Phường 1, Quận 5, TP HCM",
                    base_id: 6
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1050,
                name: "PS nhóm (SG)",
                datestart: "03 Tháng M. hai, 2017",
                datestart_en: "2017-12-03",
                study_time: "(8h30-11h30 & 13h30-16h30) Chủ nhật",
                description: "Đăng kí lớp cho nhóm của bạn",
                status: 0,
                activated: 0,
                schedule_id: 17,
                total_paid: 6,
                target: 6,
                total_register: 6,
                regis_target: 6,
                created_at: "08:38, 8 Tháng M. một, 2017",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 1,
                    name: "Photoshop",
                    icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072407tOyRFhAeFPjsbfu.jpg"
                },
                room: {
                    id: 20,
                    name: "Tầng 5",
                    base: "Cơ sở 3",
                    address: "Số 835/14 Trần Hưng Đạo, Phường 1, Quận 5, TP HCM",
                    base_id: 6
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1049,
                name: "PT 31.2",
                datestart: "12 Tháng M. hai, 2017",
                datestart_en: "2017-12-12",
                study_time: "(19h-21h) Thứ 3 - Thứ 5",
                description: "Khai giảng ngày 12 tháng 12 năm 2017",
                status: 1,
                activated: 0,
                schedule_id: 13,
                total_paid: 2,
                target: 10,
                total_register: 8,
                regis_target: 10,
                created_at: "12:04, 7 Tháng M. một, 2017",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 4,
                    name: "Photography",
                    icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg"
                },
                teacher: {
                    id: 650,
                    name: "Nguyễn Việt Anh",
                    color: "ffeb3b"
                },
                teacher_assistant: {
                    id: 40,
                    name: " Đức Hoàng",
                    color: "9c27b0"
                },
                room: {
                    id: 8,
                    name: "Studio Tầng 5",
                    base: "Cơ sở 1",
                    address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội",
                    base_id: 3
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1048,
                name: "PT 31.3",
                datestart: "13 Tháng M. hai, 2017",
                datestart_en: "2017-12-13",
                study_time: "(19h-21h) Thứ 4 - Thứ 6",
                description: "Khai giảng ngày 13 tháng 12 năm 2017",
                status: 1,
                activated: 0,
                schedule_id: 16,
                total_paid: 3,
                target: 10,
                total_register: 3,
                regis_target: 10,
                created_at: "12:04, 7 Tháng M. một, 2017",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 4,
                    name: "Photography",
                    icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg"
                },
                teacher: {
                    id: 650,
                    name: "Nguyễn Việt Anh",
                    color: "ffeb3b"
                },
                teacher_assistant: {
                    id: 40,
                    name: " Đức Hoàng",
                    color: "9c27b0"
                },
                room: {
                    id: 8,
                    name: "Studio Tầng 5",
                    base: "Cơ sở 1",
                    address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội",
                    base_id: 3
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1047,
                name: "PT 31.4",
                datestart: "16 Tháng M. hai, 2017",
                datestart_en: "2017-12-16",
                study_time: "(15h-17h) Thứ 7 - Chủ Nhật",
                description: "Khai giảng ngày 16 tháng 12 năm 2017",
                status: 1,
                activated: 0,
                schedule_id: 18,
                total_paid: 5,
                target: 10,
                total_register: 8,
                regis_target: 10,
                created_at: "12:04, 7 Tháng M. một, 2017",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 4,
                    name: "Photography",
                    icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg"
                },
                teacher: {
                    id: 650,
                    name: "Nguyễn Việt Anh",
                    color: "ffeb3b"
                },
                teacher_assistant: {
                    id: 40,
                    name: " Đức Hoàng",
                    color: "9c27b0"
                },
                room: {
                    id: 8,
                    name: "Studio Tầng 5",
                    base: "Cơ sở 1",
                    address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội",
                    base_id: 3
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1046,
                name: "PT 31.5",
                datestart: "16 Tháng M. hai, 2017",
                datestart_en: "2017-12-16",
                study_time: "(9h-11h) Thứ 7 - Chủ Nhật",
                description: "Khai giảng ngày 16 tháng 12 năm 2017",
                status: 1,
                activated: 0,
                schedule_id: 17,
                total_paid: 7,
                target: 10,
                total_register: 7,
                regis_target: 10,
                created_at: "12:04, 7 Tháng M. một, 2017",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 4,
                    name: "Photography",
                    icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg"
                },
                teacher: {
                    id: 650,
                    name: "Nguyễn Việt Anh",
                    color: "ffeb3b"
                },
                teacher_assistant: {
                    id: 40,
                    name: " Đức Hoàng",
                    color: "9c27b0"
                },
                room: {
                    id: 8,
                    name: "Studio Tầng 5",
                    base: "Cơ sở 1",
                    address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội",
                    base_id: 3
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1045,
                name: "PR 31.2",
                datestart: "13 Tháng M. hai, 2017",
                datestart_en: "2017-12-13",
                study_time: "(19h-21h) Thứ 4 - Thứ 6",
                description: "Khai giảng ngày 13 tháng 12 năm 2017",
                status: 1,
                activated: 0,
                schedule_id: 19,
                total_paid: 7,
                target: 20,
                total_register: 11,
                regis_target: 20,
                created_at: "12:02, 7 Tháng M. một, 2017",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 5,
                    name: "Premiere",
                    icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481009736PWVqDXlU8KoFwwJ.jpg"
                },
                teacher: {
                    id: 650,
                    name: "Nguyễn Việt Anh",
                    color: "ffeb3b"
                },
                teacher_assistant: {
                    id: 3269,
                    name: "Trần Quang Vũ",
                    color: "00bcd4"
                },
                room: {
                    id: 19,
                    name: "Tầng 3",
                    base: "Cơ sở 4",
                    address: "Số 15 ngõ 2 Thọ Tháp (Trần Thái Tông rẽ vào) - Cầu Giấy - Hà Nội",
                    base_id: 8
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1044,
                name: "PT - Khoá Sau (Danh Sách Chờ)",
                datestart: "10 Tháng Mười, 2017",
                datestart_en: "2017-10-10",
                study_time: "colorME sẽ gọi cho bạn mỗi khi có khoá mới.",
                description: "Nhận ưu đãi tốt nhất từ colorME",
                status: 1,
                activated: 0,
                schedule_id: 0,
                total_paid: 8,
                target: 1,
                total_register: 43,
                regis_target: 1,
                created_at: "11:58, 7 Tháng M. một, 2017",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 4,
                    name: "Photography",
                    icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg"
                },
                teacher_assistant: {
                    id: 1193,
                    name: "Son Pham",
                    color: "ff9800"
                },
                room: {
                    id: 8,
                    name: "Studio Tầng 5",
                    base: "Cơ sở 1",
                    address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội",
                    base_id: 3
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1043,
                name: "PR - Danh Sách Chờ (Cơ sở 4)",
                datestart: "10 Tháng Mười, 2017",
                datestart_en: "2017-10-10",
                study_time: "colorME sẽ gọi cho bạn mỗi khi có khoá mới.",
                description: "Nhận ưu đãi tốt nhất từ colorME",
                status: 1,
                activated: 0,
                schedule_id: 0,
                total_paid: 1,
                target: 1,
                total_register: 3,
                regis_target: 1,
                created_at: "11:58, 7 Tháng M. một, 2017",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 5,
                    name: "Premiere",
                    icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481009736PWVqDXlU8KoFwwJ.jpg"
                },
                teacher_assistant: {
                    id: 46,
                    name: "Thu Trang",
                    color: "2196f3"
                },
                room: {
                    id: 19,
                    name: "Tầng 3",
                    base: "Cơ sở 4",
                    address: "Số 15 ngõ 2 Thọ Tháp (Trần Thái Tông rẽ vào) - Cầu Giấy - Hà Nội",
                    base_id: 8
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1042,
                name: "PR 31.1",
                datestart: "16 Tháng M. hai, 2017",
                datestart_en: "2017-12-16",
                study_time: "(19h-21h) Thứ 7 - Chủ Nhật",
                description: "Khai giảng ngày 16 tháng 12 năm 2017",
                status: 0,
                activated: 0,
                schedule_id: 19,
                total_paid: 14,
                target: 20,
                total_register: 23,
                regis_target: 20,
                created_at: "11:58, 7 Tháng M. một, 2017",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 5,
                    name: "Premiere",
                    icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481009736PWVqDXlU8KoFwwJ.jpg"
                },
                teacher: {
                    id: 3269,
                    name: "Trần Quang Vũ",
                    color: "00bcd4"
                },
                teacher_assistant: {
                    id: 3269,
                    name: "Trần Quang Vũ",
                    color: "00bcd4"
                },
                room: {
                    id: 4,
                    name: "Tầng 4",
                    base: "Cơ sở 1",
                    address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội",
                    base_id: 3
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            }
        ],
    }
}


export function getDataClass() {
    return {
        type: types.GET_DATA_CLASS,
        classInfo: {
            id: 948,
            name: "AI 30.4",
            datestart: "08 Tháng M. một, 2017",
            datestart_en: "2017-11-08",
            study_time: "(19h-21h) Thứ 4 - Thứ 6",
            description: "Khai giảng ngày 8 tháng 11 năm 2017",
            status: 0,
            activated: 1,
            schedule_id: 16,
            total_paid: 20,
            target: 20,
            total_register: 21,
            regis_target: 20,
            created_at: "21:49, 10 Tháng Mười, 2017",
            gen: {
                id: 23,
                name: "30"
            },
            course: {
                id: 2,
                name: "Illustrator",
                icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072336A5Ks9NSnqnHsXOn.jpg"
            },
            teacher: {
                id: 4068,
                name: "Ngọc Diệp",
                color: "e91e63",
                attendances: [
                    {
                        class_lesson_id: 7108,
                        order: 1,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 4068,
                            name: "Ngọc Diệp",
                            phone: "01667525988",
                            email: "Haraairi@gmail.com",
                            color: "e91e63",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/149309022495t7mhYBRHDar6J.jpg"
                        }
                    },
                    {
                        class_lesson_id: 7110,
                        order: 2,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 45,
                            name: "Nguyen Mine Linh",
                            phone: "01654085862",
                            email: "mailinhnguyen.15@gmail.com",
                            color: "cddc39",
                            avatar_url: "http://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1457424670qC09gEUVo3hAYyb.jpg"
                        },
                        attendance: {
                            check_in_time: "18:24",
                            check_out_time: "21:18"
                        }
                    },
                    {
                        class_lesson_id: 7112,
                        order: 3,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 4068,
                            name: "Ngọc Diệp",
                            phone: "01667525988",
                            email: "Haraairi@gmail.com",
                            color: "e91e63",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/149309022495t7mhYBRHDar6J.jpg"
                        }
                    },
                    {
                        class_lesson_id: 7114,
                        order: 4,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 4068,
                            name: "Ngọc Diệp",
                            phone: "01667525988",
                            email: "Haraairi@gmail.com",
                            color: "e91e63",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/149309022495t7mhYBRHDar6J.jpg"
                        }
                    },
                    {
                        class_lesson_id: 7116,
                        order: 5,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 4068,
                            name: "Ngọc Diệp",
                            phone: "01667525988",
                            email: "Haraairi@gmail.com",
                            color: "e91e63",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/149309022495t7mhYBRHDar6J.jpg"
                        }
                    },
                    {
                        class_lesson_id: 7118,
                        order: 6,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 4068,
                            name: "Ngọc Diệp",
                            phone: "01667525988",
                            email: "Haraairi@gmail.com",
                            color: "e91e63",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/149309022495t7mhYBRHDar6J.jpg"
                        }
                    },
                    {
                        class_lesson_id: 7120,
                        order: 7,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 4068,
                            name: "Ngọc Diệp",
                            phone: "01667525988",
                            email: "Haraairi@gmail.com",
                            color: "e91e63",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/149309022495t7mhYBRHDar6J.jpg"
                        }
                    },
                    {
                        class_lesson_id: 7122,
                        order: 8,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 4068,
                            name: "Ngọc Diệp",
                            phone: "01667525988",
                            email: "Haraairi@gmail.com",
                            color: "e91e63",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/149309022495t7mhYBRHDar6J.jpg"
                        }
                    }
                ]
            },
            teacher_assistant: {
                id: 2233,
                name: "Ngô Thị Thuỳ Duyên",
                color: "ff5722",
                attendances: [
                    {
                        class_lesson_id: 7108,
                        order: 1,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 2233,
                            name: "Ngô Thị Thuỳ Duyên",
                            phone: "0989697347",
                            email: "ngothuyduyen1997@gmail.com",
                            color: "ff5722",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505480008UPHRqwk1K4UCwgE.jpg"
                        },
                        attendance: {
                            check_in_time: "18:20",
                            check_out_time: "21:02"
                        }
                    },
                    {
                        class_lesson_id: 7110,
                        order: 2,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 2233,
                            name: "Ngô Thị Thuỳ Duyên",
                            phone: "0989697347",
                            email: "ngothuyduyen1997@gmail.com",
                            color: "ff5722",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505480008UPHRqwk1K4UCwgE.jpg"
                        },
                        attendance: {
                            check_in_time: "18:01",
                            check_out_time: "21:13"
                        }
                    },
                    {
                        class_lesson_id: 7112,
                        order: 3,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 2233,
                            name: "Ngô Thị Thuỳ Duyên",
                            phone: "0989697347",
                            email: "ngothuyduyen1997@gmail.com",
                            color: "ff5722",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505480008UPHRqwk1K4UCwgE.jpg"
                        },
                        attendance: {
                            check_in_time: "18:39"
                        }
                    },
                    {
                        class_lesson_id: 7114,
                        order: 4,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 2233,
                            name: "Ngô Thị Thuỳ Duyên",
                            phone: "0989697347",
                            email: "ngothuyduyen1997@gmail.com",
                            color: "ff5722",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505480008UPHRqwk1K4UCwgE.jpg"
                        },
                        attendance: {
                            check_in_time: "18:36",
                            check_out_time: "21:04"
                        }
                    },
                    {
                        class_lesson_id: 7116,
                        order: 5,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 2233,
                            name: "Ngô Thị Thuỳ Duyên",
                            phone: "0989697347",
                            email: "ngothuyduyen1997@gmail.com",
                            color: "ff5722",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505480008UPHRqwk1K4UCwgE.jpg"
                        },
                        attendance: {
                            check_in_time: "18:04",
                            check_out_time: "21:01"
                        }
                    },
                    {
                        class_lesson_id: 7118,
                        order: 6,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 2233,
                            name: "Ngô Thị Thuỳ Duyên",
                            phone: "0989697347",
                            email: "ngothuyduyen1997@gmail.com",
                            color: "ff5722",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505480008UPHRqwk1K4UCwgE.jpg"
                        },
                        attendance: {
                            check_in_time: "18:29",
                            check_out_time: "21:00"
                        }
                    },
                    {
                        class_lesson_id: 7120,
                        order: 7,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 2233,
                            name: "Ngô Thị Thuỳ Duyên",
                            phone: "0989697347",
                            email: "ngothuyduyen1997@gmail.com",
                            color: "ff5722",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505480008UPHRqwk1K4UCwgE.jpg"
                        },
                        attendance: {
                            check_in_time: "18:39",
                            check_out_time: "21:04"
                        }
                    },
                    {
                        class_lesson_id: 7122,
                        order: 8,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 2233,
                            name: "Ngô Thị Thuỳ Duyên",
                            phone: "0989697347",
                            email: "ngothuyduyen1997@gmail.com",
                            color: "ff5722",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505480008UPHRqwk1K4UCwgE.jpg"
                        },
                        attendance: {
                            check_in_time: "18:10",
                            check_out_time: "21:45"
                        }
                    }
                ]
            },
            room: {
                id: 9,
                name: "Tầng 2",
                base: "Cơ sở 1",
                address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội",
                base_id: 3
            },
            registers: [
                {
                    id: 16080,
                    money: 0,
                    code: "CM30056",
                    paid_status: true,
                    received_id_card: true,
                    note: "Ds chờ CCM28866",
                    student: {
                        id: 7293,
                        name: "Phạm Mai Huơng",
                        phone: "01654169458",
                        email: "phammaihuongpmh@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1507736051guzBkoSKaITF2Qq.jpg"
                    },
                    total_attendances: 8,
                    attendances: [
                        {
                            id: 183674,
                            status: 1
                        },
                        {
                            id: 183675,
                            status: 1
                        },
                        {
                            id: 183676,
                            status: 1
                        },
                        {
                            id: 183677,
                            status: 1
                        },
                        {
                            id: 183678,
                            status: 1
                        },
                        {
                            id: 183679,
                            status: 1
                        },
                        {
                            id: 183680,
                            status: 1
                        },
                        {
                            id: 183681,
                            status: 1
                        }
                    ]
                },
                {
                    id: 16358,
                    money: 0,
                    code: "CM30175",
                    paid_status: true,
                    received_id_card: true,
                    note: "ds chờ CCM28720",
                    student: {
                        id: 7007,
                        name: "Quân",
                        phone: "0942.345.861",
                        email: "hquan1907@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1507782399fk6FSXYwQnODrQ5.jpg"
                    },
                    total_attendances: 7,
                    attendances: [
                        {
                            id: 185939,
                            status: 1
                        },
                        {
                            id: 185940,
                            status: 1
                        },
                        {
                            id: 185941,
                            status: 1
                        },
                        {
                            id: 185942,
                            status: 1
                        },
                        {
                            id: 185943,
                            status: 1
                        },
                        {
                            id: 185944,
                            status: 1
                        },
                        {
                            id: 185945,
                            status: 1
                        },
                        {
                            id: 185946,
                            status: 0
                        }
                    ]
                },
                {
                    id: 16375,
                    money: 0,
                    code: "CM30163",
                    paid_status: true,
                    received_id_card: true,
                    note: "DSC CM29161",
                    student: {
                        id: 6667,
                        name: "Bùi Khánh Linh",
                        phone: "01692606682",
                        email: "khanhlinh.marketer@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 4,
                    attendances: [
                        {
                            id: 185759,
                            status: 0
                        },
                        {
                            id: 185760,
                            status: 0
                        },
                        {
                            id: 185761,
                            status: 1
                        },
                        {
                            id: 185762,
                            status: 0
                        },
                        {
                            id: 185763,
                            status: 1
                        },
                        {
                            id: 185764,
                            status: 1
                        },
                        {
                            id: 185765,
                            status: 1
                        },
                        {
                            id: 185766,
                            status: 0
                        }
                    ]
                },
                {
                    id: 16423,
                    money: 0,
                    code: "CM30195",
                    paid_status: true,
                    received_id_card: true,
                    note: "DS chờ CCM28540",
                    student: {
                        id: 6743,
                        name: "Nguyễn Gia Bảo",
                        phone: "0976170799",
                        email: "nguyenpopo1777@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 4,
                    attendances: [
                        {
                            id: 186389,
                            status: 1
                        },
                        {
                            id: 186390,
                            status: 1
                        },
                        {
                            id: 186391,
                            status: 1
                        },
                        {
                            id: 186392,
                            status: 1
                        },
                        {
                            id: 186393,
                            status: 0
                        },
                        {
                            id: 186394,
                            status: 0
                        },
                        {
                            id: 186395,
                            status: 0
                        },
                        {
                            id: 186396,
                            status: 0
                        }
                    ]
                },
                {
                    id: 16541,
                    money: 0,
                    code: "CM30322",
                    paid_status: true,
                    received_id_card: true,
                    note: "ds chờ CCM28717",
                    student: {
                        id: 7131,
                        name: "Minh Khoa",
                        phone: "0981.690.908",
                        email: "domhkhoa@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1507994672hV6Gw9k6N19VtI7.jpg"
                    },
                    total_attendances: 7,
                    attendances: [
                        {
                            id: 189134,
                            status: 1
                        },
                        {
                            id: 189135,
                            status: 0
                        },
                        {
                            id: 189136,
                            status: 1
                        },
                        {
                            id: 189137,
                            status: 1
                        },
                        {
                            id: 189138,
                            status: 1
                        },
                        {
                            id: 189139,
                            status: 1
                        },
                        {
                            id: 189140,
                            status: 1
                        },
                        {
                            id: 189141,
                            status: 1
                        }
                    ]
                },
                {
                    id: 16584,
                    money: 0,
                    code: "CM30314",
                    paid_status: true,
                    received_id_card: true,
                    note: "ds chờ CCM28627",
                    student: {
                        id: 5644,
                        name: "Phan Đình Đức",
                        phone: "0169.529.4021",
                        email: "Ducpd.1192@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/15108935879ppsg7uY1yNWp3W.jpg"
                    },
                    total_attendances: 8,
                    attendances: [
                        {
                            id: 189014,
                            status: 1
                        },
                        {
                            id: 189015,
                            status: 1
                        },
                        {
                            id: 189016,
                            status: 1
                        },
                        {
                            id: 189017,
                            status: 1
                        },
                        {
                            id: 189018,
                            status: 1
                        },
                        {
                            id: 189019,
                            status: 1
                        },
                        {
                            id: 189020,
                            status: 1
                        },
                        {
                            id: 189021,
                            status: 1
                        }
                    ]
                },
                {
                    id: 16585,
                    money: 0,
                    code: "CM30313",
                    paid_status: true,
                    received_id_card: true,
                    note: "ds chờ CCM28629",
                    student: {
                        id: 7445,
                        name: "Hoàng Anh Thư",
                        phone: "0982952518",
                        email: "hoanganhthucnn121@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 7,
                    attendances: [
                        {
                            id: 188999,
                            status: 1
                        },
                        {
                            id: 189000,
                            status: 1
                        },
                        {
                            id: 189001,
                            status: 1
                        },
                        {
                            id: 189002,
                            status: 1
                        },
                        {
                            id: 189003,
                            status: 0
                        },
                        {
                            id: 189004,
                            status: 1
                        },
                        {
                            id: 189005,
                            status: 1
                        },
                        {
                            id: 189006,
                            status: 1
                        }
                    ]
                },
                {
                    id: 16622,
                    money: 0,
                    code: "CM30409",
                    paid_status: true,
                    received_id_card: true,
                    note: "bảo lưu học lại CM26454",
                    student: {
                        id: 4793,
                        name: "Vũ Tố Uyên",
                        phone: "01667099068",
                        email: "vutouyen15121998@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 6,
                    attendances: [
                        {
                            id: 190844,
                            status: 1
                        },
                        {
                            id: 190845,
                            status: 1
                        },
                        {
                            id: 190846,
                            status: 1
                        },
                        {
                            id: 190847,
                            status: 0
                        },
                        {
                            id: 190848,
                            status: 1
                        },
                        {
                            id: 190849,
                            status: 1
                        },
                        {
                            id: 190850,
                            status: 1
                        },
                        {
                            id: 190851,
                            status: 0
                        }
                    ]
                },
                {
                    id: 16625,
                    money: 750000,
                    code: "CM30348",
                    paid_status: true,
                    received_id_card: false,
                    note: "combo 3",
                    student: {
                        id: 5316,
                        name: "Nguyễn Thị Thảo",
                        phone: "0971094145",
                        email: "thaonguyen1816@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1510290152no2CB1nvYMFh8p2.jpg"
                    },
                    total_attendances: 0,
                    attendances: [
                        {
                            id: 189569,
                            status: 0
                        },
                        {
                            id: 189570,
                            status: 0
                        },
                        {
                            id: 189571,
                            status: 0
                        },
                        {
                            id: 189572,
                            status: 0
                        },
                        {
                            id: 189573,
                            status: 0
                        },
                        {
                            id: 189574,
                            status: 0
                        },
                        {
                            id: 189575,
                            status: 0
                        },
                        {
                            id: 189576,
                            status: 0
                        }
                    ]
                },
                {
                    id: 16648,
                    money: 0,
                    code: "CM30357",
                    paid_status: true,
                    received_id_card: true,
                    note: "bảo lưu",
                    student: {
                        id: 4874,
                        name: "Võ Minh Huyền",
                        phone: "0165.754.7555",
                        email: "huyen2998@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 6,
                    attendances: [
                        {
                            id: 189749,
                            status: 1
                        },
                        {
                            id: 189750,
                            status: 1
                        },
                        {
                            id: 189751,
                            status: 1
                        },
                        {
                            id: 189752,
                            status: 0
                        },
                        {
                            id: 189753,
                            status: 1
                        },
                        {
                            id: 189754,
                            status: 1
                        },
                        {
                            id: 189755,
                            status: 1
                        },
                        {
                            id: 189756,
                            status: 0
                        }
                    ]
                },
                {
                    id: 16668,
                    money: 0,
                    code: "CM30332",
                    paid_status: true,
                    received_id_card: true,
                    note: "ds chờ CM15264",
                    student: {
                        id: 2181,
                        name: "Bùi Ánh Ngọc",
                        phone: "01638349688",
                        email: "buianhngoc8998@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 6,
                    attendances: [
                        {
                            id: 189314,
                            status: 0
                        },
                        {
                            id: 189315,
                            status: 1
                        },
                        {
                            id: 189316,
                            status: 1
                        },
                        {
                            id: 189317,
                            status: 1
                        },
                        {
                            id: 189318,
                            status: 1
                        },
                        {
                            id: 189319,
                            status: 1
                        },
                        {
                            id: 189320,
                            status: 1
                        },
                        {
                            id: 189321,
                            status: 0
                        }
                    ]
                },
                {
                    id: 16697,
                    money: 850000,
                    code: "CM30396",
                    paid_status: true,
                    received_id_card: true,
                    note: "hóm ba với Nguyễn Tiến Thiệu, Bùi Tuấn Anh, giảm 15%",
                    student: {
                        id: 7682,
                        name: "Lê Thanh Tùng",
                        phone: "0962444267",
                        email: "thanhletungusth249@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 6,
                    attendances: [
                        {
                            id: 190589,
                            status: 1
                        },
                        {
                            id: 190590,
                            status: 1
                        },
                        {
                            id: 190591,
                            status: 1
                        },
                        {
                            id: 190592,
                            status: 0
                        },
                        {
                            id: 190593,
                            status: 1
                        },
                        {
                            id: 190594,
                            status: 0
                        },
                        {
                            id: 190595,
                            status: 1
                        },
                        {
                            id: 190596,
                            status: 1
                        }
                    ]
                },
                {
                    id: 16874,
                    money: 850000,
                    code: "CM30459",
                    paid_status: true,
                    received_id_card: true,
                    note: "combo 2",
                    student: {
                        id: 7758,
                        name: "Nguyễn Hải Đăng ",
                        phone: "0904504075",
                        email: "Ngdang2410@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1510067460n4XNvQJURuYZw0C.jpg"
                    },
                    total_attendances: 5,
                    attendances: [
                        {
                            id: 192104,
                            status: 1
                        },
                        {
                            id: 192105,
                            status: 1
                        },
                        {
                            id: 192106,
                            status: 0
                        },
                        {
                            id: 192107,
                            status: 1
                        },
                        {
                            id: 192108,
                            status: 1
                        },
                        {
                            id: 192109,
                            status: 0
                        },
                        {
                            id: 192110,
                            status: 1
                        },
                        {
                            id: 192111,
                            status: 0
                        }
                    ]
                },
                {
                    id: 16882,
                    money: 0,
                    code: "CM30420",
                    paid_status: true,
                    received_id_card: true,
                    note: "bảo lưu học lại CM24404",
                    student: {
                        id: 2496,
                        name: "Chu Hà Phương",
                        phone: "0989199659",
                        email: "kimnguthuongthan149@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1478412362vaggZNUeYA99BYd.jpg"
                    },
                    total_attendances: 2,
                    attendances: [
                        {
                            id: 191264,
                            status: 1
                        },
                        {
                            id: 191265,
                            status: 1
                        },
                        {
                            id: 191266,
                            status: 0
                        },
                        {
                            id: 191267,
                            status: 0
                        },
                        {
                            id: 191268,
                            status: 0
                        },
                        {
                            id: 191269,
                            status: 0
                        },
                        {
                            id: 191270,
                            status: 0
                        },
                        {
                            id: 191271,
                            status: 0
                        }
                    ]
                },
                {
                    id: 17024,
                    money: 1000000,
                    code: "CM30478",
                    paid_status: true,
                    received_id_card: true,
                    note: "ck",
                    student: {
                        id: 7818,
                        name: "Nguyễn Trọng Thuỷ",
                        phone: "0968996863",
                        email: "trongthuy.utc@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1510296543PVi7jdqiWBJIVLB.jpg"
                    },
                    total_attendances: 7,
                    attendances: [
                        {
                            id: 192464,
                            status: 1
                        },
                        {
                            id: 192465,
                            status: 1
                        },
                        {
                            id: 192466,
                            status: 1
                        },
                        {
                            id: 192467,
                            status: 1
                        },
                        {
                            id: 192468,
                            status: 1
                        },
                        {
                            id: 192469,
                            status: 1
                        },
                        {
                            id: 192470,
                            status: 1
                        },
                        {
                            id: 192471,
                            status: 0
                        }
                    ]
                },
                {
                    id: 17101,
                    money: 750000,
                    code: "CM30505",
                    paid_status: true,
                    received_id_card: true,
                    note: "chưa có thẻ, ưu đãi giờ vàng ",
                    student: {
                        id: 7838,
                        name: "Phạm Thị Thu Hà",
                        phone: "0939100495",
                        email: "phamha9095@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 3,
                    attendances: [
                        {
                            id: 193094,
                            status: 1
                        },
                        {
                            id: 193095,
                            status: 1
                        },
                        {
                            id: 193096,
                            status: 0
                        },
                        {
                            id: 193097,
                            status: 1
                        },
                        {
                            id: 193098,
                            status: 0
                        },
                        {
                            id: 193099,
                            status: 0
                        },
                        {
                            id: 193100,
                            status: 0
                        },
                        {
                            id: 193101,
                            status: 0
                        }
                    ]
                },
                {
                    id: 17121,
                    money: 900000,
                    code: "CM30530",
                    paid_status: true,
                    received_id_card: true,
                    note: "",
                    student: {
                        id: 4269,
                        name: "Đặng Thị Lan Chi",
                        phone: "0963432597",
                        email: "gaoking2911@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 8,
                    attendances: [
                        {
                            id: 193559,
                            status: 1
                        },
                        {
                            id: 193560,
                            status: 1
                        },
                        {
                            id: 193561,
                            status: 1
                        },
                        {
                            id: 193562,
                            status: 1
                        },
                        {
                            id: 193563,
                            status: 1
                        },
                        {
                            id: 193564,
                            status: 1
                        },
                        {
                            id: 193565,
                            status: 1
                        },
                        {
                            id: 193566,
                            status: 1
                        }
                    ]
                },
                {
                    id: 17135,
                    money: 0,
                    code: "",
                    paid_status: false,
                    received_id_card: false,
                    note: "",
                    student: {
                        id: 7849,
                        name: "Nguyễn Thị Thùy Linh",
                        phone: "0973.232.395",
                        email: "linhmon01@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 0,
                    attendances: []
                },
                {
                    id: 17152,
                    money: 0,
                    code: "CM30545",
                    paid_status: true,
                    received_id_card: true,
                    note: "ds chờ CCCM28741",
                    student: {
                        id: 7114,
                        name: "Nguyễn Trọng Quang Huy",
                        phone: "01636723377",
                        email: "quanghuy1998hn@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 7,
                    attendances: [
                        {
                            id: 193829,
                            status: 1
                        },
                        {
                            id: 193830,
                            status: 1
                        },
                        {
                            id: 193831,
                            status: 1
                        },
                        {
                            id: 193832,
                            status: 1
                        },
                        {
                            id: 193833,
                            status: 1
                        },
                        {
                            id: 193834,
                            status: 1
                        },
                        {
                            id: 193835,
                            status: 0
                        },
                        {
                            id: 193836,
                            status: 1
                        }
                    ]
                },
                {
                    id: 17153,
                    money: 0,
                    code: "CM30546",
                    paid_status: true,
                    received_id_card: true,
                    note: "ds chờ CCM28744",
                    student: {
                        id: 7115,
                        name: "Trần Hoàng Nam",
                        phone: "01666881998",
                        email: "namtran0798@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1507828482gvct2ufTCSmLR2N.jpg"
                    },
                    total_attendances: 8,
                    attendances: [
                        {
                            id: 193844,
                            status: 1
                        },
                        {
                            id: 193845,
                            status: 1
                        },
                        {
                            id: 193846,
                            status: 1
                        },
                        {
                            id: 193847,
                            status: 1
                        },
                        {
                            id: 193848,
                            status: 1
                        },
                        {
                            id: 193849,
                            status: 1
                        },
                        {
                            id: 193850,
                            status: 1
                        },
                        {
                            id: 193851,
                            status: 1
                        }
                    ]
                },
                {
                    id: 17198,
                    money: 0,
                    code: "CM31004",
                    paid_status: true,
                    received_id_card: true,
                    note: "",
                    student: {
                        id: 3889,
                        name: " Đoàn Ngọc Hiếu",
                        phone: "0124.880.0896",
                        email: "ngochieu.nhim261@gmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1510310076J03XM096YJjo53T.jpg"
                    },
                    total_attendances: 4,
                    attendances: [
                        {
                            id: 194294,
                            status: 1
                        },
                        {
                            id: 194295,
                            status: 1
                        },
                        {
                            id: 194296,
                            status: 1
                        },
                        {
                            id: 194297,
                            status: 0
                        },
                        {
                            id: 194298,
                            status: 0
                        },
                        {
                            id: 194299,
                            status: 1
                        },
                        {
                            id: 194300,
                            status: 0
                        },
                        {
                            id: 194301,
                            status: 0
                        }
                    ]
                }
            ],
            attendances: [
                {
                    order: 1,
                    total_attendance: 17,
                    is_change: false,
                    class_lesson_time: "2017-11-08",
                    class_lesson_id: 7108
                },
                {
                    order: 2,
                    total_attendance: 17,
                    is_change: false,
                    class_lesson_time: "2017-11-10",
                    class_lesson_id: 7110
                },
                {
                    order: 3,
                    total_attendance: 16,
                    is_change: false,
                    class_lesson_time: "2017-11-15",
                    class_lesson_id: 7112
                },
                {
                    order: 4,
                    total_attendance: 13,
                    is_change: false,
                    class_lesson_time: "2017-11-17",
                    class_lesson_id: 7114
                },
                {
                    order: 5,
                    total_attendance: 14,
                    is_change: false,
                    class_lesson_time: "2017-11-22",
                    class_lesson_id: 7116
                },
                {
                    order: 6,
                    total_attendance: 14,
                    is_change: false,
                    class_lesson_time: "2017-11-24",
                    class_lesson_id: 7118
                },
                {
                    order: 7,
                    total_attendance: 14,
                    is_change: false,
                    class_lesson_time: "2017-11-29",
                    class_lesson_id: 7120
                },
                {
                    order: 8,
                    total_attendance: 8,
                    is_change: false,
                    class_lesson_time: "2017-12-01",
                    class_lesson_id: 7122
                }
            ]
        }
    }
}

export function getDataCallHistory() {
    return {
        type: types.GET_DATA_CALL_HISTORY,
        call_history: [
            {
                id: 17330,
                student: {
                    id: 8421,
                    name: "Nguyễn Thuỳ Linh",
                    email: "thuylinhnguyen5996@gmail.com",
                    phone: "0983790190"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Trc 8/12 qua vp",
                call_time: "5 Tháng M. hai, 2017, 11:23"
            },
            {
                id: 17329,
                student: {
                    id: 8420,
                    name: "Đỗ Thanh Như",
                    email: "dothanhnhu@gmail.com",
                    phone: "0904189975"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Trc 8/12 ck",
                call_time: "5 Tháng M. hai, 2017, 11:18"
            },
            {
                id: 17328,
                student: {
                    id: 3909,
                    name: "Phạm Thị Quỳnh Trang",
                    email: "hannietr203@gmail.com",
                    phone: "0944428123"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Giảm 10% học viên cũ do kì kèo quá",
                call_time: "5 Tháng M. hai, 2017, 11:17"
            },
            {
                id: 17327,
                student: {
                    id: 6015,
                    name: "Hoàng Anh Ngọc",
                    email: "hoanganhngoc247@gmail.com",
                    phone: "0969645978"
                },
                call_status: "failed",
                caller: {
                    id: 6079,
                    name: "Phương Thảo",
                    color: "8bc34a"
                },
                note: "Mess",
                call_time: "5 Tháng M. hai, 2017, 11:08"
            },
            {
                id: 17326,
                student: {
                    id: 7116,
                    name: "Nguyễn Hà Linh ",
                    email: "ngnhalinh.68@gmail.com",
                    phone: "0941750608"
                },
                call_status: "success",
                caller: {
                    id: 6079,
                    name: "Phương Thảo",
                    color: "8bc34a"
                },
                note: "Cf đi học",
                call_time: "5 Tháng M. hai, 2017, 11:07"
            },
            {
                id: 17325,
                student: {
                    id: 3755,
                    name: "Nguyễn Hải Anh",
                    email: "anhnguyen267.ulis@gmail.com",
                    phone: "0945866395"
                },
                call_status: "success",
                caller: {
                    id: 6079,
                    name: "Phương Thảo",
                    color: "8bc34a"
                },
                note: "Cf xác nhận",
                call_time: "5 Tháng M. hai, 2017, 11:05"
            },
            {
                id: 17324,
                student: {
                    id: 8003,
                    name: "Nguyễn Văn Sơn",
                    email: "vanson25798@gmail.com",
                    phone: "01692108889"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Trc 8/12 ck",
                call_time: "5 Tháng M. hai, 2017, 09:55"
            },
            {
                id: 17323,
                student: {
                    id: 8406,
                    name: "Hoàng Hoài Linh",
                    email: "hoanglinhbro1701@gmail.com",
                    phone: "01229271720"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Chiều qua vp, giảm 15%",
                call_time: "5 Tháng M. hai, 2017, 09:48"
            },
            {
                id: 17322,
                student: {
                    id: 8401,
                    name: "Phạm Thanh Hường",
                    email: "phth.huong92@gmail.com",
                    phone: "0905041292"
                },
                call_status: "success",
                caller: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                note: "mai lên vp đóng tiền ưu đãi 15%",
                call_time: "4 Tháng M. hai, 2017, 23:22"
            },
            {
                id: 17321,
                student: {
                    id: 3486,
                    name: "Ma Huyền Trang",
                    email: "tan.kh0ngtuoc@gmail.com",
                    phone: "01299312567"
                },
                call_status: "success",
                caller: {
                    id: 26,
                    name: "Yến Nhi",
                    color: "e91e63"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2017, 22:39"
            },
            {
                id: 17320,
                student: {
                    id: 3486,
                    name: "Ma Huyền Trang",
                    email: "tan.kh0ngtuoc@gmail.com",
                    phone: "01299312567"
                },
                call_status: "success",
                caller: {
                    id: 26,
                    name: "Yến Nhi",
                    color: "e91e63"
                },
                note: "Nghi vấn học hộ, đã hẹn buổi đầu mang chứng minh thư hoặc thẻ sinh viên để giảng viên kiểm tra",
                call_time: "4 Tháng M. hai, 2017, 22:39"
            },
            {
                id: 17319,
                student: {
                    id: 8390,
                    name: "Hoàng Mai Linh",
                    email: "linhbin18799@gmail.com",
                    phone: "0964980070"
                },
                call_status: "success",
                caller: {
                    id: 3331,
                    name: "Lý Nguyệt Thu",
                    color: "F62359"
                },
                note: "đang cân nhắc xem có học PT không, sẽ báo lại",
                call_time: "4 Tháng M. hai, 2017, 22:19"
            },
            {
                id: 17318,
                student: {
                    id: 8389,
                    name: "Trịnh Mai Hoa",
                    email: "hoatm2501@gmail.com",
                    phone: "0918420596"
                },
                call_status: "success",
                caller: {
                    id: 3331,
                    name: "Lý Nguyệt Thu",
                    color: "F62359"
                },
                note: "đang cân nhắc xem có học PT không, sẽ báo lại",
                call_time: "4 Tháng M. hai, 2017, 22:19"
            },
            {
                id: 17317,
                student: {
                    id: 8391,
                    name: "Vũ Thị Thảo Nguyên",
                    email: "vttnnguyen295@gmail.com",
                    phone: "01697670653"
                },
                call_status: "success",
                caller: {
                    id: 3331,
                    name: "Lý Nguyệt Thu",
                    color: "F62359"
                },
                note: "đang cân nhắc xem có học PT không, sẽ báo lại",
                call_time: "4 Tháng M. hai, 2017, 22:18"
            },
            {
                id: 17316,
                student: {
                    id: 8392,
                    name: "Đinh Phương Linh",
                    email: "linhdinh812@gmail.com",
                    phone: "0983633970"
                },
                call_status: "success",
                caller: {
                    id: 3290,
                    name: "Nguyễn Mỹ Linh",
                    color: "c0ca33"
                },
                note: "Đang chơi event",
                call_time: "4 Tháng M. hai, 2017, 21:09"
            },
            {
                id: 17315,
                student: {
                    id: 3939,
                    name: "Bùi Trung Kiên",
                    email: "trungkienbui1998@gmail.com",
                    phone: "0168.770.7575"
                },
                call_status: "success",
                caller: {
                    id: 3290,
                    name: "Nguyễn Mỹ Linh",
                    color: "c0ca33"
                },
                note: "Trước mùng 8 qua vp",
                call_time: "4 Tháng M. hai, 2017, 21:09"
            },
            {
                id: 17314,
                student: {
                    id: 8388,
                    name: "Đào Hà Phương",
                    email: "thedove3110@gmail.com",
                    phone: "01289340288"
                },
                call_status: "success",
                caller: {
                    id: 3290,
                    name: "Nguyễn Mỹ Linh",
                    color: "c0ca33"
                },
                note: "Đang chơi event để được giảm. Giảm thì qua",
                call_time: "4 Tháng M. hai, 2017, 21:08"
            },
            {
                id: 17313,
                student: {
                    id: 8405,
                    name: "Lê Văn Duy",
                    email: "leduy22995@gmail.com",
                    phone: "0969576695"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "trc 8/12 ck",
                call_time: "4 Tháng M. hai, 2017, 20:52"
            },
            {
                id: 17312,
                student: {
                    id: 8405,
                    name: "Lê Văn Duy",
                    email: "leduy22995@gmail.com",
                    phone: "0969576695"
                },
                call_status: "failed",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2017, 20:49"
            },
            {
                id: 17311,
                student: {
                    id: 8302,
                    name: "Phạm Ngọc Chinh",
                    email: "chinhngoc21@gmail.com",
                    phone: "01683885992"
                },
                call_status: "success",
                caller: {
                    id: 5063,
                    name: "Lê Khánh Linh",
                    color: "00bcd4"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2017, 16:14"
            },
            {
                id: 17310,
                student: {
                    id: 8305,
                    name: "Nguyễn Thạch Thảo",
                    email: "sailorneoqueenmoon@gmail.com",
                    phone: "01683986087"
                },
                call_status: "failed",
                caller: {
                    id: 5063,
                    name: "Lê Khánh Linh",
                    color: "00bcd4"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2017, 16:13"
            },
            {
                id: 17309,
                student: {
                    id: 7433,
                    name: "Trần Hương Giang",
                    email: "tranhuonggiangkn@gmail.com",
                    phone: "0168.330.3689"
                },
                call_status: "success",
                caller: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "e81284"
                },
                note: "học viên cũ, 800k",
                call_time: "4 Tháng M. hai, 2017, 15:57"
            },
            {
                id: 17308,
                student: {
                    id: 8399,
                    name: "Nguyễn Khắc Hiếu",
                    email: "khachieu258@gmail.com",
                    phone: "01257389555"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Nhóm 3 900, trc 8/12 đóng",
                call_time: "4 Tháng M. hai, 2017, 14:51"
            },
            {
                id: 17307,
                student: {
                    id: 8398,
                    name: "Nguyễn Thanh Tùng",
                    email: "th.tung.panda@gmail.com",
                    phone: "0934579696"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Nhóm 3 900",
                call_time: "4 Tháng M. hai, 2017, 14:51"
            },
            {
                id: 17306,
                student: {
                    id: 8341,
                    name: "Trịnh Nguyên Thảo",
                    email: "nguyenthao22900@gmail.com",
                    phone: "0978025166"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Trc 8/12 ck",
                call_time: "4 Tháng M. hai, 2017, 14:34"
            },
            {
                id: 17305,
                student: {
                    id: 8393,
                    name: "Nguyễn Ngọc Diệp Yến",
                    email: "diepyenng@gmail.com",
                    phone: "0989363951"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Trc 8/12 qua vp",
                call_time: "4 Tháng M. hai, 2017, 14:33"
            },
            {
                id: 17304,
                student: {
                    id: 8393,
                    name: "Nguyễn Ngọc Diệp Yến",
                    email: "diepyenng@gmail.com",
                    phone: "0989363951"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2017, 14:29"
            },
            {
                id: 17303,
                student: {
                    id: 8393,
                    name: "Nguyễn Ngọc Diệp Yến",
                    email: "diepyenng@gmail.com",
                    phone: "0989363951"
                },
                call_status: "failed",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2017, 14:28"
            },
            {
                id: 17302,
                student: {
                    id: 2802,
                    name: "Ngô Minh",
                    email: "minh.greencity@gmail.com",
                    phone: "0962183335"
                },
                call_status: "failed",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Nhầm máy?? Email",
                call_time: "4 Tháng M. hai, 2017, 14:26"
            },
            {
                id: 17301,
                student: {
                    id: 8394,
                    name: "Lê Đặng Hoàng Tùng",
                    email: "ledanghoangtung@gmail.com",
                    phone: "01638595779"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Nhóm 3, 900k, trc 8/12 qua vp",
                call_time: "4 Tháng M. hai, 2017, 14:23"
            },
            {
                id: 17300,
                student: {
                    id: 5972,
                    name: "Nguyễn Thị Hồng Hà",
                    email: "1234glx@gmail.com",
                    phone: "0868959480"
                },
                call_status: "success",
                caller: {
                    id: 6079,
                    name: "Phương Thảo",
                    color: "8bc34a"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2017, 13:57"
            },
            {
                id: 17299,
                student: {
                    id: 7557,
                    name: "Phạm Lê Ngọc Linh",
                    email: "ngoclinhrobust26@gmail.com",
                    phone: "01632361999"
                },
                call_status: "failed",
                caller: {
                    id: 6079,
                    name: "Phương Thảo",
                    color: "8bc34a"
                },
                note: "Mess",
                call_time: "4 Tháng M. hai, 2017, 13:53"
            },
            {
                id: 17298,
                student: {
                    id: 6992,
                    name: "Đào Diễm Quỳnh",
                    email: "nghoanganh0612@gmail.com",
                    phone: "0985853689"
                },
                call_status: "failed",
                caller: {
                    id: 6079,
                    name: "Phương Thảo",
                    color: "8bc34a"
                },
                note: "Mess",
                call_time: "4 Tháng M. hai, 2017, 13:50"
            },
            {
                id: 17297,
                student: {
                    id: 7115,
                    name: "Trần Hoàng Nam",
                    email: "namtran0798@gmail.com",
                    phone: "01666881998"
                },
                call_status: "success",
                caller: {
                    id: 6079,
                    name: "Phương Thảo",
                    color: "8bc34a"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2017, 13:49"
            },
            {
                id: 17296,
                student: {
                    id: 7114,
                    name: "Nguyễn Trọng Quang Huy",
                    email: "quanghuy1998hn@gmail.com",
                    phone: "01636723377"
                },
                call_status: "success",
                caller: {
                    id: 6079,
                    name: "Phương Thảo",
                    color: "8bc34a"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2017, 13:48"
            },
            {
                id: 17295,
                student: {
                    id: 730,
                    name: "Nguyễn Tuấn Hải",
                    email: "lightningyb@gmail.com",
                    phone: "0968085907"
                },
                call_status: "failed",
                caller: {
                    id: 6079,
                    name: "Phương Thảo",
                    color: "8bc34a"
                },
                note: "Đã mess",
                call_time: "4 Tháng M. hai, 2017, 13:47"
            },
            {
                id: 17294,
                student: {
                    id: 7709,
                    name: "Phạm Hoàng Minh",
                    email: "phamhoangminh82@gmail.com",
                    phone: "0961.279.630"
                },
                call_status: "success",
                caller: {
                    id: 6083,
                    name: "Phạm Hà Thu",
                    color: "009688"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2017, 11:14"
            },
            {
                id: 17293,
                student: {
                    id: 8185,
                    name: "vũ nga",
                    email: "ngabeo2002csp@gmail.com",
                    phone: "01292576369"
                },
                call_status: "failed",
                caller: {
                    id: 6083,
                    name: "Phạm Hà Thu",
                    color: "009688"
                },
                note: "vẫn k ck, đã remind",
                call_time: "4 Tháng M. hai, 2017, 11:13"
            },
            {
                id: 17292,
                student: {
                    id: 8185,
                    name: "vũ nga",
                    email: "ngabeo2002csp@gmail.com",
                    phone: "01292576369"
                },
                call_status: "success",
                caller: {
                    id: 6083,
                    name: "Phạm Hà Thu",
                    color: "009688"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2017, 11:13"
            },
            {
                id: 17291,
                student: {
                    id: 7888,
                    name: "Hà Thị Thuỳ Linh",
                    email: "Halinh.12061998@gmail.com",
                    phone: "01643534549"
                },
                call_status: "success",
                caller: {
                    id: 6083,
                    name: "Phạm Hà Thu",
                    color: "009688"
                },
                note: "k nghe máy, đã ntin",
                call_time: "4 Tháng M. hai, 2017, 11:12"
            }
        ],
    }
}

