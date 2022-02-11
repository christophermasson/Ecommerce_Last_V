<?php 

use App\Repository\ArticlesRepository;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class PanierService {

    protected $session;
    protected $accessoireRepository;

    public function __contruct(SessionInterface $session, ArticlesRepository $repos) {

        $this->session = $session;
        $this->articlesRepository = $repos;
    }   
    
    public function add(int $id){
        $panier = $this->session->get('panier',[]);
        if(!empty($panier[$id])){
            $panier[$id]++;
        } else {
            $panier[$id] = 1;
        }
        $this->session->set('panier',$panier);
    }
}

