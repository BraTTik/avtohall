"use strict";

$(document).ready(function() {
    const serviceLists = [
		[
			{
				"title": "Cтапельные работы", 
				"href": "#"
			},
			{
				"title": "Жестянные работы", 
				"href": "#"
			},
			{
				"title": "Арматурные работы", 
				"href": "#"
			},
			{
				"title": "Покраска автомобиля", 
				"href": "#"
			},
			{
				"title": "Покраска мотоцикла", 
				"href": "#"
			},
			{
				"title": "Абразивная полировка", 
				"href": "#"
			},
			{
				"title": "Лёгкая полировка блеск", 
				"href": "#"
			},
			{
				"title": "Защитная полировка", 
				"href": "#"
			},
			{
				"title": "Антикоррозийная обработка", 
				"href": "#"
			},
			{
				"title": "Удаление вмятин без покраски", 
				"href": "#"
			},
			],
		[
			{
				"title": "Механический ремонт", 
				"href": "#"
			},
			{
				"title": "Механический ремонт", 
				"href": "#"
			},
			{
				"title": "Механический ремонт", 
				"href": "#"
			},
			{
				"title": "Механический ремонт", 
				"href": "#"
			},
			{
				"title": "Механический ремонт", 
				"href": "#"
			},
			{
				"title": "Механический ремонт", 
				"href": "#"
			},
			{
				"title": "Механический ремонт", 
				"href": "#"
			},
			{
				"title": "Механический ремонт", 
				"href": "#"
			},
			{
				"title": "Механический ремонт", 
				"href": "#"
			},
		],
		[
			{
				"title": "Экспресс услуги", 
				"href": "#"
			},
			{
				"title": "Экспресс услуги", 
				"href": "#"
			},
			{
				"title": "Экспресс услуги", 
				"href": "#"
			},
			{
				"title": "Экспресс услуги", 
				"href": "#"
			},
			{
				"title": "Экспресс услуги", 
				"href": "#"
			},
		],
		[
			{
				"title": "Диагностика", 
				"href": "#"
			},
			{
				"title": "Диагностика", 
				"href": "#"
			},
			{
				"title": "Диагностика", 
				"href": "#"
			},
			{
				"title": "Диагностика", 
				"href": "#"
			},
			{
				"title": "Диагностика", 
				"href": "#"
			},
			{
				"title": "Диагностика", 
				"href": "#"
			},
			{
				"title": "Диагностика", 
				"href": "#"
			},
		],
		[
			{
				"title": "Слесарные работы", 
				"href": "#"
			},
			{
				"title": "Слесарные работы", 
				"href": "#"
			},
			{
				"title": "Слесарные работы", 
				"href": "#"
			},
			{
				"title": "Слесарные работы", 
				"href": "#"
			},
			{
				"title": "Слесарные работы", 
				"href": "#"
			},
			{
				"title": "Слесарные работы", 
				"href": "#"
			},
			{
				"title": "Слесарные работы", 
				"href": "#"
			},
			{
				"title": "Слесарные работы", 
				"href": "#"
			},
			{
				"title": "Слесарные работы", 
				"href": "#"
			},
		],
		[
			{
				"title": "Ремонт пластика", 
				"href": "#"
			},
			{
				"title": "Ремонт пластика", 
				"href": "#"
			},
			{
				"title": "Ремонт пластика", 
				"href": "#"
			},
			{
				"title": "Ремонт пластика", 
				"href": "#"
			},
			{
				"title": "Ремонт пластика", 
				"href": "#"
			},
			{
				"title": "Ремонт пластика", 
				"href": "#"
			},
			{
				"title": "Ремонт пластика", 
				"href": "#"
			},
			{
				"title": "Ремонт пластика", 
				"href": "#"
			},
			{
				"title": "Ремонт пластика", 
				"href": "#"
			},
		],
	]
	

	$(".mc-toggle").click(function(){
		if($(this).hasClass("active")){
            closeServiceList();
		}else{
            openServiceList($(this));
		}
    });

    window.addEventListener('resize', ()=>{
        if($(".mc-toggle.active").length != 0){
            let activeToggle = $(".mc-toggle.active");
            let top = findServiceListPosition(activeToggle);
            $(".mc_service-list").css({"top": `${top}px`});
        }
    })
    
    function openServiceList(obj){
        $(".mc-toggle").removeClass("active");
        obj.addClass("active");
        let listNumber = $(".mc-toggle").index(obj);
        makeServiceList(serviceLists[listNumber]);
        let top = findServiceListPosition(obj);
        $(".mc_service-list").slideDown().css({"top": `${top}px`});
    }

    function closeServiceList(){
        $(".mc-toggle").removeClass("active");
        $(".mc_service-list").slideUp();
    }

    function findServiceListPosition(obj){
        let height = obj.parent().height();
        let position = (obj.parent().position());
        return height + position["top"] + 20;
    }

    function makeServiceList(list){
        let ulElem = $(".mc_service-list");
        ulElem.html('');
		list.forEach(elem=>{
			let liElem = document.createElement('li');
			liElem.innerHTML = `<a href="${elem.href}">${elem.title}</a>`
			ulElem.append(liElem);
		})
    }
    

});