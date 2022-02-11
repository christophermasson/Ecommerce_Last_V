<?php

namespace App\Controller;

use PanierService;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PanierController extends AbstractController
{
    #[Route('/panier', name: 'panier')]
    public function index(): Response
    {
        return $this->render('panier/index.html.twig', [
            'controller_name' => 'PanierController',
        ]);
    }
    
// racourcie clav  = Ctrl + alt + i   => import namespace 
    #[Route('/panier/add/{id}', name:"panier_add")]
    public function add(PanierService $service, $id){
        $service->add($id);
    }
}
