package com.example.joblera;

import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MyWebViewClient extends WebViewClient {
    @Override
    public void onPageFinished(WebView view, String url) {
        super.onPageFinished(view, url);
        String script = "javascript:let placeholder = document.getElementById('para');" +
                " let out ='';" +
                "for(let i=0;i<10;i++){" +
                "out+=\"`<section class='post-area section-gap'>" +
                " <div class='container'>" +
                " <div class='row justify-content-center d-flex'>" +
                " <div class='col-lg-8 post-list'>" +
                " <div class='single-post d-flex flex-row'>" +
                " <div class='thumb'>" +
                " <img src='img/post.png' alt=''>" +
                " <ul class='tags'>" +
                " <li>" +
                " <a href=''>Art</a>" +
                " </li>" +
                " <li>" +
                " <a href=''>Media</a>" +
                " </li>" +
                " <li>" +
                " <a href=''>Design</a>" +
                " </li>" +
                " </ul>" +
                " </div>" +
                " <div class='details'>" +
                " <div class='title d-flex flex-row justify-content-between'>" +
                " <div class='titles'>" +
                " <h4>${product.poste}</h4>" +
                " <h6>${product.society}</h6>" +
                " </div>" +
                " </div>" +
                " <p>${product.description}</p>" +
                " <h5>Job Nature: Full time</h5>" +
                " <p class='address'><span class='lnr lnr-map'></span> 56/8, Panthapath Dhanmondi Dhaka</p>" +
                " <p class='address'><span class='lnr lnr-database'></span> 15k - 25k</p>" +
                " </div>" +
                " </div>" +
                " </div>" +
                " </div>" +
                " </div>" +
                " <div class='col-lg-4 sidebar'>" +
                " </div>" +
                " </section>`\"}" +
                "placeholder.innerHTML = out;";
        view.loadUrl(script);
            }
    }