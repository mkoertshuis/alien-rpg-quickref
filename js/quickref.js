function add_quickref_item(parent, data, type) {
    var icon = data.icon || "perspective-dice-six-faces-one";
    var subtitle = data.subtitle || "";
    var title = data.title || "[no title]";

    var item = document.createElement("div");
    item.className += "item itemsize"
    item.innerHTML =
    '\
    <div class="item-icon iconsize icon-' + icon + '"></div>\
    <div class="item-text-container text">\
        <div class="item-title">' + title + '</div>\
        <div class="item-desc">' + subtitle + '</div>\
    </div>\
    ';

    var style = window.getComputedStyle(parent.parentNode.parentNode);
    var color = style.backgroundColor;

    item.onclick = function () {
        show_modal(data, color, type);
    }

    parent.appendChild(item);
}

function show_modal(data, color, type) {
    var title = data.title || "[no title]";
    var subtitle = data.description || data.subtitle || "";
    var bullets = data.bullets || [];
    var reference = data.reference || "";
    type = type || "";
    color = color || "black"

    document.body.classList.add("modal-open");
    document.getElementById("modal").classList.add("modal-visible");
    document.getElementById("modal-container").style.backgroundColor = color;
    document.getElementById("modal-container").style.borderColor = color;
    document.getElementById("modal-title").innerHTML = title + "<span class=\"float-right\">" + type + "</span>";
    document.getElementById("modal-subtitle").innerHTML = subtitle;
    document.getElementById("modal-reference").innerHTML = reference;

    var bullets_html = bullets.map(function (item) { return "<p class=\"fontsize\">" + item + "</p>"; }).join("\n<hr>\n");
    document.getElementById("modal-bullets").innerHTML = bullets_html;
}

function hide_modal() {
    document.body.classList.remove("modal-open");
    document.getElementById("modal").classList.remove("modal-visible");
}

function fill_section(data, parentname, type) {
    var parent = document.getElementById(parentname);
    data.forEach(function (item) {
        add_quickref_item(parent, item, type);
    });
}

window.onload = function() {
    fill_section(data_slow, "basic-slow", "Slow Action");
    fill_section(data_fast, "basic-fast", "Fast Action");
    fill_section(data_conditions, "hazards-conditions", "Conditions");
    fill_section(data_environment, "hazards-environment", "Environment");

    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}
