class ArticleController < ApplicationController
    before_action :set_article, only: [:show, :update, :destroy]

    def index
        @articles = Article.all
        @articles
    end

    def show
        @article
    end

    def create
        @article = Article.new(
            title: params[:title], 
            html_text: params[:htmlText],
            cover: params[:cover]
        )
        
        if @article.save
          render json: @article, status: :created, location: @article
        else
          render json: @article.errors, status: :unprocessable_entity
        end        
    end

    private
        def set_article
            @article = Article.find(params[:id])
        end

        def article_params
            # params.require(:article).permit(:title, :cover, :htmlText)
        end
end
